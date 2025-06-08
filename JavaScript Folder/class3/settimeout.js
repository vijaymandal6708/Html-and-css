console.log("Starting");

let count=0;
let inter;

let run=()=>{
    inter = setInterval(()=>{
    console.log(count);
    count++;
  },1000)
}

let clearr=()=>{
  clearInterval(inter);
}
