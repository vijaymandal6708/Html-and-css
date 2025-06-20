const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNumber = 0;

right.addEventListener("click", ()=>{
  if(slideNumber<images.length-16){
    slideNumber++;
    slider.style.transform = `translateX(-${slideNumber*326}px)`;
  } 
})

left.addEventListener("click", ()=>{
  if(slideNumber>-3){
    slideNumber--;
    slider.style.transform = `translateX(-${slideNumber*326}px)`;
  } 
})


