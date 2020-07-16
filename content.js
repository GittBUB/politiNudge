changeImages(false);

function changeImages()
{
	changeImages(true);
}

function changeImages(puppies){
    const imgTagCount = document.getElementsByTagName('img').length;
    const imgTags = document.getElementsByTagName('img');

    for (let i = 0; i < imgTagCount; i++) {
        let oldWidth = imgTags[i].width;
        let oldheight = imgTags[i].height;

        let pickImage = evaluateImage(oldWidth, oldheight);
        let newImage;
        
        newImage = chrome.extension.getURL(pickImage.img);
        newUrl = chrome.extension.getURL(pickImage.url);

        imgTags[i].src = newImage;
        imgTags[i].closest('a').href = newUrl.slice(52);
        imgTags[i].style.width = '100%';
        imgTags[i].style.height = '100%';
    }
}

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
        {img:"images/Ballet.jpg", url:b},
        {img:"images/March_on_Washington.jpg", url:c},
        {img:"images/She_Sould_Run.jpg", url:d},
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
        let n = Math.floor(Math.random() * moreImages.length);
        let randomImage = moreImages[n]; 
        return randomImage;
  }

}