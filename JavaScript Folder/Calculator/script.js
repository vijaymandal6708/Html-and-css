let store="";

let dis=(val)=>{
  if(val=='+'||val=='-'||val=='*'||val=='/'||val=='%'){
    if(store.slice(-1)=='+'||store.slice(-1)=='-'||store.slice(-1)=='*'||store.slice(-1)=='/'||store.slice(-1)=='%'){
    let screen=document.querySelector("#display");
    val="";
    store=store+val;
    screen.innerHTML=store;
    }
    else{
     let screen=document.querySelector("#display");
     store=store+val;
     screen.innerHTML=store; 
    }
  }
  else{
    let screen=document.querySelector("#display");
    store=store+val;
    screen.innerHTML=store;
  }
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
  store="0";
  screen.innerHTML=store;
}

console.log(1000+parseInt(Math.random()*9000));
console.log(1+(parseInt(Math.random()*6)));