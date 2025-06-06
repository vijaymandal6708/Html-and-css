let store="";

let dis=(val)=>{
  if(store.includes("+")==true){
    
  }
  let screen=document.querySelector("#display");
  store=store+val;
  screen.innerHTML=store;
}

let res=()=>{
  let screen=document.querySelector("#display");
  store=eval(store).toString();
  screen.innerHTML=store;
}

let del=()=>{
  let screen=document.querySelector("#display");
  store=store.slice(0,-1);
  screen.innerHTML=store;
}

let allClr=()=>{
  let screen=document.querySelector("#display");
  store="";
  screen.innerHTML=store;
}

console.log(1000+parseInt(Math.random()*9000));
console.log(1+(parseInt(Math.random()*6)));