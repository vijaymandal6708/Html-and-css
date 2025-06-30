let display = document.querySelector(".display");
let btn = document.querySelector(".btn").value;


let store="";
function display1(val){
  store=store+val;
  display.innerHTML+=store;
}
  

function eval(){
  display.innerHTML= eval(display.innerHTML).toString();
}