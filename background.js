var NodeWebcam = require( "node-webcam" );


//Default options

var opts = {

    //Picture related

    width: 1280,

    height: 720,

    quality: 100,

    // Number of frames to capture
    // More the frames, longer it takes to capture
    // Use higher framerate for quality. Ex: 60

    frames: 60,


    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows

    delay: 0,


    //Save shots in memory

    saveShots: true,


    // [jpeg, png] support varies
    // Webcam.OutputTypes

    output: "jpeg",


    //Which camera to use
    //Use Webcam.list() for results
    //false for default device

    device: false,


    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes

    callbackReturn: "location",


    //Logging

    verbose: false

};


//Creates webcam instance

var Webcam = NodeWebcam.create( opts );


//Will automatically append location output type

Webcam.capture( "test_picture", function( err, data ) {} );


//Also available for quick use

NodeWebcam.capture( "test_picture", opts, function( err, data ) {

});


//Get list of cameras

Webcam.list( function( list ) {

    //Use another device

    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );

});

//Return type with base 64 image

var opts = {
    callbackReturn: "base64"
};

NodeWebcam.capture( "test_picture", opts, function( err, data ) {

    var image = "<img src='" + data + "'>";

});







// const nodeWebCam = require('node-webcam');
// const fs = require('fs');
// const app = require('express')();
// const express = require('express');
// const path = require('path');

// // npm install node-webcam fs path

// app.use(express.static('images')) // images folder to be served
// // Now we can just say localhost:3000/image.jpg

// // specifying parameters for the pictures to be taken
// var options = {
//   width: 1280,
//   height: 720,
//   quality: 100,
//   delay: 1,
//   saveShots: true,
//   output: "jpeg",
//   device: false,
//   callbackReturn: "location"
// };

// // create instance using the above options
// var webcam = nodeWebCam.create(options);

// // capture function that snaps <amount> images and saves them with the given name in a folder of the same name
// var captureShot = (amount, i, name) => {
//   // Make sure this returns a real url to an image.
//   return new Promise(resolve => {
//     var path = `./images/${name}`;

//     // create folder if and only if it does not exist
//     if (!fs.existsSync(path)) {
//       fs.mkdirSync(path);
//     }
//     // capture the image
//     webcam.capture(`./images/${name}/${name}${i}.${options.output}`, (err, data) => {
//       if (!err) {
//         console.log('Image created')
//       }
//       console.log(err);
//       i++;
//       if (i <= amount) {
//         captureShot(amount, i, name);
//       }
//       resolve('/path/to/image.jpg')
//     });
//   })

// };


// app.get('/', (req, res) => {
//   captureShot(30, 1, 'robin')
//     .then((response) => {
//       // Whatever we resolve in captureShot, that's what response will contain
//       res.send('<img src="${response}"/>')
//     })
// });

// app.listen(3000, () => {
//   console.log("Listening at port 3000....");
// });