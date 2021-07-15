var slideIndex ;

function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }


    for (var slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}

function closeGallery(){
    document.getElementById("gallery").style.display = "none" ;
    
}

function showGallery(directory){
    var slider = document.querySelector(".slider .viewport") ;
    slider.innerHTML = "" ;
    for(var i = 1 ; i <= 3 ; i++){
        slider.innerHTML += "<div class=\"item\"><img src=\"images/"+directory+"/"+i+".jpg\" alt=\"Capture d'écran de "+directory.toUpperCase()+"\" /></div>" ;
    }
    
    slideIndex = 1;
    showSlides(slideIndex);
    
    document.getElementById("gallery").style.display = "flex" ;
}