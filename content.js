// This is the default run that launches the auto-load
changeImages(false);

function changeImages(puppies){
    const imgTagCount = document.getElementsByTagName('img').length;
    const imgTags = document.getElementsByTagName('img');

    for (let i = 0; i < imgTagCount; i++) {
        let oldWidth = imgTags[i].width;
        let oldheight = imgTags[i].height;

        let pickImage = evaluateImage(oldWidth, oldheight);
		let puppyImage = getPuppyImage();
        let newImage = puppies ? chrome.extension.getURL(puppyImage) : chrome.extension.getURL(pickImage);

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
        return getRandomImage(moreImages);
    }
}

function getPuppyImage()
{
	let puppyImages = [
		"images/puppies/puppy.png",
		"images/puppies/puppy2.jpeg",
		"images/puppies/puppy3.jpeg",
		"images/puppies/puppy4.jpeg",
		"images/puppies/puppy5.jpeg",
		"images/puppies/puppy6.jpeg",
		"images/puppies/puppy7.jpg",
		"images/puppies/puppy8.jpeg",
		"images/puppies/puppy9.jpeg",
		"images/puppies/puppy10.jpeg",
		"images/puppies/puppy11.jpeg",
		"images/puppies/puppy12.jpeg",
		"images/puppies/puppy13.jpeg",
		"images/puppies/puppy14.jpeg",
		"images/puppies/puppy15.jpeg",
		"images/puppies/puppy16.jpeg"
	];
	 return getRandomImage(puppyImages);
}

function getRandomImage(imageSet)
{
	let n = Math.floor(Math.random() * imageSet.length);
        return imageSet[n]; 
}

// This method is called from the popup.js to reset the images based on the cuddle mode toggle 
chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage (bool) {
  changeImages(bool);
}