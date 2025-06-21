
// -----------Browse by property type container---------

const left1 = document.querySelector('.left1');
const right1 = document.querySelector('.right1');
const slider1 = document.querySelector('.slider1');
const images1 = document.querySelectorAll('.image1');

let slideNumber = 0;

right1.addEventListener("click", ()=>{
  if(slideNumber<images1.length-4){
    slideNumber++;
    slider1.style.transform = `translateX(-${slideNumber*326}px)`;
  } 
})

left1.addEventListener("click", ()=>{
  if(slideNumber>-3){
    slideNumber--;
    slider1.style.transform = `translateX(-${slideNumber*326}px)`;
  } 
})


// --------Explore india container--------

const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const slider2 = document.querySelector('.slider2');
const images2 = document.querySelectorAll('.image2');

slideNumber = 0;

right2.addEventListener("click", ()=>{
  if(slideNumber<6){
    slideNumber++;
    slider2.style.transform = `translateX(-${slideNumber*216}px)`;
  }
})

left2.addEventListener("click", ()=>{
  if(slideNumber>0){
    slideNumber--;
    slider2.style.transform = `translateX(-${slideNumber*216}px)`;
  } 
})
