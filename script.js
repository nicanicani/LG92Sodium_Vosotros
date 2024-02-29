function redirect() {
    alert('You will be redirected to the second web page.');
    //The window.open() method opens a new browser window, or a new tab, depending on the parameter values.
    window.open("second.html");
}

function changeImage(){
    pic.src = "media/image2.jpg"
}

function revertImage(){
    pic.src = "media/image1.jpg"
}

