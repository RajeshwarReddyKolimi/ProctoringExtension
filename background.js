chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "submitForm") {
      var formData = {
        name: request.name,
        email: request.email,
        phone: request.phone
      };
      chrome.storage.local.set(formData, function() {
        sendResponse({ message: "Form submitted!" });
      });
    }
  });
  