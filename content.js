// This is the default run that launches the auto-load
changeImages(false);

function changeImages()
{
	changeImages(true);
}

// Change page images and and <a> tag href url
function changeImages(puppies){
    const imgTagCount = document.getElementsByTagName('img').length;
    const imgTags = document.getElementsByTagName('img');

    for (let i = 0; i < imgTagCount; i++) {
        let oldWidth = imgTags[i].width;
        let oldheight = imgTags[i].height;

        let pickImage = evaluateImage(oldWidth, oldheight);
        let puppyImage = getPuppyImage();
        
        let newImage = puppies ? chrome.extension.getURL(puppyImage) : chrome.extension.getURL(pickImage.img);
        let newUrl = chrome.extension.getURL(pickImage.url);

        imgTags[i].src = newImage;
        imgTags[i].closest('a').href = newUrl.slice(52);
        imgTags[i].style.width = '100%';
        imgTags[i].style.height = '100%';
    }
}

// Used to determine which political replacement image fits the container of the original image  
function evaluateImage(width, height){
    const a = "https://blacklivesmatter.com";
    const b = "https://www.vote411.org";
    const c = "https://nationalactionnetwork.net/events";
    const d = "https://www.sheshouldrun.org";
    const e = "https://www.theunitedstateofwomen.org/youth";
    const f = "https://votesaveamerica.com";
    const g = "https://www.voterunlead.org";

    let moreImages = [
        {img:"images/BLM.jpg", url:a},
        {img:"images/Ballot.jpg", url:b},
        {img:"images/March_on_Washington.jpg", url:c},
        {img:"images/She_Should_Run.jpg", url:d},
        {img:"images/US_of_Young_Women.jpg", url:e},
        {img:"images/Vote_Save_America.jpg", url:f} 
    ];

    if (height < 0.6*width){
        return {img:"images/Vote_Run_Lead.jpg", url:g};
    } 
    
    else if (width < 0.6*height){
        return {img:"images/Vote_411.jpg", url:b};
    } 
    
    else {
        return getRandomImage(moreImages);
    }
}

// Used to select puppy image to replace political image
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