function getCredentials() {
  return new Promise((resolve, reject) => {
    $.getJSON("/dist/credentials.json", function(data) {
      console.log(data);
      resolve(data);
    }).fail(function() {
      reject();
    });
  });
}

function triggerSubmit () {
  // let username = "alyssahacker99@yahoo.com";
  // let password = "testpassworddddd";
  getCredentials().then(function(data) {
    let code = `window.loginWithCredentials('${ data.username }', '${ data.password }')`;
    chrome.tabs.executeScript(null, { code: code }, function(result) {
      console.log('Submit executed');
    });
  });
};

function triggerDetectFields() {
  let code  = `window.colorDetectFields()`;
  chrome.tabs.executeScript(null, { code: code }, function(result) {
    console.log('Submit executed');
  });
}

function triggerObtainValues() {
  let code  = `window.triggerObtainValues()`;
  chrome.tabs.executeScript(null, { code: code }, function(result) {
    console.log('Submit executed');
  });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  setTimeout(function() {
    let msg = request.message;
    console.log(msg);
    if (msg == 'triggerSubmit') {
      triggerSubmit();
    } else if(msg == 'triggerDetectFields') {
      triggerDetectFields();
    } else if (msg == 'triggerObtainValues') {
      triggerObtainValues();
    }
  }, 1);
  return true;
});