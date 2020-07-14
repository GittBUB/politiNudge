let slider = document.getElementById('puppy')
let bool = false;

slider.addEventListener('click', setAction)

function setAction() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  bool = !bool;
    chrome.tabs.sendMessage(tabs[0].id, bool);
  });
}