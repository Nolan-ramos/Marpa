var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".image_pres_logement");
    var dots = document.querySelectorAll(".select_image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function modal_image(open, close, modal) {
    open.onclick = function (){
        modal.style.top = "0";
        modal.style.visibility = "visible";
        body.style.overflow = "hidden";
    }
    close.onclick = function () {
        modal.style.top = "-100%";
        modal.style.visibility = "hidden";
        body.style.overflow = "auto";
    };
}
modal_image(document.querySelector("#img_slide_1"), document.querySelector("#close_modal_img_1"), document.querySelector("#modal_img_1"));
modal_image(document.querySelector("#img_slide_2"), document.querySelector("#close_modal_img_2"), document.querySelector("#modal_img_2"));
modal_image(document.querySelector("#img_slide_3"), document.querySelector("#close_modal_img_3"), document.querySelector("#modal_img_3"));
modal_image(document.querySelector("#img_slide_4"), document.querySelector("#close_modal_img_4"), document.querySelector("#modal_img_4"));
modal_image(document.querySelector("#img_slide_5"), document.querySelector("#close_modal_img_5"), document.querySelector("#modal_img_5"));

