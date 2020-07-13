changeImages(false);

function changeImages()
{
	changeImages(true);
}

// function changeImages(puppies){
//     const imgTagCount = document.getElementsByTagName('img').length;
//     const imgTags = document.getElementsByTagName('img');

//     let i;
//     for (i = 0; i < imgTagCount; i++) {
//         console.log('OLD img src: ', imgTags[i].src);
        
//         let newImage;
//         if (puppies) newImage = chrome.extension.getURL('images/puppy.png');
// 	    else newImage = chrome.extension.getURL('images/img1.jpg'); 

function changeImages(puppies){
    const imgTagCount = document.getElementsByTagName('img').length;
    const imgTags = document.getElementsByTagName('img');

    for (let i = 0; i < imgTagCount; i++) {
        let oldWidth = imgTags[i].width;
        let oldheight = imgTags[i].height;

        let pickImage = evaluateImage(oldWidth, oldheight);
        let newImage;
        
        if (puppies) newImage = chrome.extension.getURL('images/puppy.png');
   	    else newImage = chrome.extension.getURL(pickImage);

        imgTags[i].src = newImage;
        // imgTags[i].style.width = 'auto';
        // imgTags[i].style.height = 'auto';
        imgTags[i].width = oldWidth;
        imgTags[i].height = oldheight;
    }
}

function evaluateImage(width, height){
    let moreImages = [ 
        'images/BLM.jpg',
        'images/Ballet.jpg',
        'images/March_on_Washington.jpg',
        'images/She_Sould_Run.jpg',
        'images/US_of_Young Women.jpg',
        'images/Vote_Save_America.jpg' 
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