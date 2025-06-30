let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let time = [0,0,0];
let timerid=0;

start.addEventListener("click", ()=>{
  if(timerid!=0){
      return
    }
  timerid = setInterval(()=>{
    
    time[2]++;
    if(time[2]==60){
      time[1]++;
      time[2]=0;
    }
    if(time[1]==60){
      time[0]++;
      time[1]=0;
    }
    console.log(time);
    hour.innerHTML = time[0].toString().padStart(2, "0").padEnd(3, ":");
    minute.innerHTML = time[1].toString().padStart(2, "0").padEnd(3, ":");
    second.innerHTML = time[2].toString().padStart(2, "0");
    start.classList.add("disable");
    stop.classList.remove("disable");
  },1000)
})

stop.addEventListener("click",()=>{
  stop.classList.add("disable");
  start.classList.remove("disable");
  clearInterval(timerid);
  timerid=0;
})

reset.addEventListener("click", ()=>{
  clearInterval(timerid);
  time=[0,0,0];
  timerid=0;
  hour.innerHTML = time[0];
  minute.innerHTML = time[1];
  second.innerHTML = time[2];
})
