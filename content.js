chrome.runtime.onMessage.addListener(changeImages);

function changeImages(){
    // IMPROVEMENTS
    // try to get image size and get new image to fit
    // randomization
    // automatic load
    
    // STRETCH
    // take a break
    // undo button
    
    console.log('changeImages is starting');

    const imgTagCount = document.getElementsByTagName('img').length;
    const imgTags = document.getElementsByTagName('img');
    
    console.log('Count:',imgTagCount);

    let i;
    for (i = 0; i < imgTagCount; i++) {
        console.log('OLD img src: ', imgTags[i].src);
        
        let newImage = chrome.extension.getURL('images/img1.jpg'); 
        imgTags[i].src = newImage;
        
        console.log('NEW img src: ', imgTags[i].src);
    }

}