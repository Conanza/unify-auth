
function triggerSubmit() {
chrome.runtime.sendMessage({ message: 'triggerSubmit' });
window.close();
}

function triggerDetectFields() {
chrome.runtime.sendMessage({ message: 'triggerDetectFields' });
window.close();
}

function triggerObtainValues() {
chrome.runtime.sendMessage({ message: 'triggerObtainValues' });
window.close();
}

$(document).ready(init);

function init() {
  $("#login").on('click', function(e) {
    triggerSubmit();
  });
  $("#detectFields").on('click', function(e) {
    triggerDetectFields();
  });
  $("#obtainValues").on('click', function(e) {
    triggerObtainValues();
  });
}