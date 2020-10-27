var idx = 1;

function sliderTimer(){
    document.getElementById("slider").classList.remove(`slider-image-${idx}`);
    idx++;
    if(idx == 5){
    idx = 1;}
    
    document.getElementById("slider").classList.add(`slider-image-${idx}`);
}

var slider = setInterval(sliderTimer, 10000)