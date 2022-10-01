function upDate(previewPic){
    element = document.getElementById("image");

    element.style.backgroundImage = "url(" + previewPic.src + ")";
    element.style.backgroundColor = "#CCEECC";

    element.innerHTML = previewPic.alt;
}

function unDo(){
    element = document.getElementById("image");

    element.style.backgroundImage = "url('')";
    element.style.backgroundColor = "#8E68FF";  

    element.innerHTML = "Hover over an image below to display here.";
}
