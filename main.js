
// -----------------------------------------------------------HEADER_SLIDER

var sliderImg = document.querySelectorAll(" .slider-img");
var sliderLeft = document.querySelectorAll(" .slider-left-icon");
var sliderRight = document.querySelectorAll(" .slider-right-icon");
var header__text = document.querySelectorAll(" .header-text");
console.log(header__text);
console.log(sliderLeft);
var i = 0;
console.log(i);
sliderLeft[0].addEventListener("click", function() {
    if(i == 0) {
        i = sliderImg.length - 1;
    }
    else {
        --i;
    }
    for(let j = 0; j < sliderImg.length; j++) {
        if(i === j) {
            sliderImg[j].classList.add("active");
            header__text[j].classList.add("active");
        }
        else {
            sliderImg[j].classList.remove("active");
            header__text[j].classList.remove("active");
        }
    }
});
sliderRight[0].addEventListener("click", function() {
    if(i == (sliderImg.length - 1)) {
        i = 0;
    }
    else {
        ++i;
    }
    for(let j = 0; j < sliderImg.length; j++) {
        if(i === j) {
            sliderImg[j].classList.add("active");
            header__text[j].classList.add("active");
        }
        else {
            sliderImg[j].classList.remove("active");
            header__text[j].classList.remove("active");
        }
    }
});


// ----------------------------------------------------NAVBAR_SCROLL

window.addEventListener("scroll", function() {
    var whiteNav = document.getElementsByClassName('navbar white-nav');
    console.log(whiteNav);
    whiteNav[0].style.transform = "translateY(-120%)";
    var y  = window.pageYOffset;
    if(y !== 0) {
        whiteNav[0].style.transform = "translateY(0%)";
    }
    else {
        whiteNav[0].style.transform = "translateY(-120%)";
    }
    
})

    
