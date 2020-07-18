let slider = document.getElementById('puppy')
let bool = false;

slider.addEventListener('click', setAction)

function setAction() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  bool = !bool;
    chrome.tabs.sendMessage(tabs[0].id, bool);
  });
}

let email = document.getElementById('email')
email.addEventListener('click', sendEmail)

let mailto = "mailto:politinudge@gmail.com?subject=I%20want%20to%20be%20on%20PolitiNudge!&body=Tell%20us%20about%20your%20organization/event,%20and%20remember%20to%20attach%20your%20image!";

function sendEmail() {
	window.open(mailto, 'popUpWindow');
}