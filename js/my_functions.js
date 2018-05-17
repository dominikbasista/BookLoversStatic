//$('#right_arrow').click (function (){
//   var curentSlide = $('.slide.active');
//    var nextSlide =  curentSlide.next();
//    
//    curentSlide.fadeOut(300).removeClass('active');
//    nextSlide.fadeIn(300).addClass('active');
//});


let sliderImages = document.querySelectorAll('.slide'),
    leftArrow = document.querySelector('#left_arrow'),
    rightArrow = document.querySelector('#right_arrow'),
    current = 0;

function reset(){
    for(let i=0;i<sliderImages.length;i++){
        sliderImages[i].style.display="none";
    }
}
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

function slideLeft() {
    reset();
    sliderImages[current-1].style.display="block";
    current--;
}
function slideRight() {
    reset();
    sliderImages[current+1].style.display="block";
    current++;
}
    
leftArrow.addEventListener("click", function(){
    if(current === 0){
       current=sliderImages.length;
      }
    slideLeft();
});
    
rightArrow.addEventListener("click", function(){
    if(current === sliderImages.length-1){
       current = -1;
      }
    slideRight();
});


startSlide();
    
