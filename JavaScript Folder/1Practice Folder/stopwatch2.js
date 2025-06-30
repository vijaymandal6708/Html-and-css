let start = document.querySelector("#start");

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let time = [0,0,0];

start.addEventListener("click", ()=>{

   let timerId = setInterval(()=>{
     time[2]++;
     if(time[2]==60){
      time[1]++;
      time[2]=0;
     }
     if(time=[1]==60){
      time[0]++;
      time[1]=0;
     }
     console.log(time);
   }, 1000)

})