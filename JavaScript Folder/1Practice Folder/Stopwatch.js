let start=document.querySelector("#start");

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let time = [0,0,0];

// start.addEventListener("click", function(){
//   timerId= setInterval(()=>{
//     time[2]++;
//     if(time[2]==60){
//       time[1]++;
//       time[2]=0;
//     }
//     if(time[1]==60){
//       time[0]++;
//       time[1]=0;
//     }
//     console.log(time);
//   }, 1000)
// })

start.addEventListener("click", ()=>{
  timerId = setInterval(()=>{
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
    display();
  }, 1000)
})

function display(){
  hour.innerHTML=time[0];
  minute.innerHTML=time[1];
  second.innerHTML=time[2];
}