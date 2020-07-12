console.log("Poli-Nudge Background: No action needed."); 

chrome.browserAction.onClicked.addListener(buttonClicked); 
function buttonClicked(tab) 
{ 
let msg = { 
txt : "Hello" 
} 
chrome.tabs.sendMessage(tab.id,msg); 
} 

console.log('end of background');



