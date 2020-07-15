// This is the default run that launches the auto-load
changeImages(false);

function changeImages(puppies){
    const imgTagCount = document.getElementsByTagName('img').length;
    const imgTags = document.getElementsByTagName('img');

    for (let i = 0; i < imgTagCount; i++) {
        let oldWidth = imgTags[i].width;
        let oldheight = imgTags[i].height;

        let pickImage = evaluateImage(oldWidth, oldheight);
        let newImage = puppies ? chrome.extension.getURL('images/puppy.png') : chrome.extension.getURL(pickImage);

        imgTags[i].src = newImage;
        // imgTags[i].style.width = 'auto';
        // imgTags[i].style.height = 'auto';
        imgTags[i].width = oldWidth;
        imgTags[i].height = oldheight;
    }
}

function evaluateImage(width, height){
    let moreImages = [ 
        "images/Ballot.jpg",
		"images/BLM.jpg",
		"images/Donate.jpg",
		"images/March_on_Washington.jpg",
		"images/Petition.jpg",
		"images/She_Should_Run.jpg",
		"images/Supplies.jpg",
		"images/Support_Black_Businesses.jpg",
		"images/US_of_Young_Women.jpg",
		"images/Voice.jpg",
		"images/Vote_411.jpg",
		"images/Vote_Run_Lead.jpg",
		"images/Vote_Save_America.jpg"
        ];

    if (height < 0.6*width){
        return 'images/Vote_Run_Lead.jpg';
    } else if (width < 0.6*height){
        return 'images/Vote_411.jpg';
    } else {
        let n = Math.floor(Math.random() * moreImages.length);
        let randomImage = moreImages[n]; 
        return randomImage;
    }
}

// This method is called from the popup.js to reset the images based on the cuddle mode toggle 
chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage (bool) {
  changeImages(bool);
}