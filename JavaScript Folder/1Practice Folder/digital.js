function showTime(){
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  session="AM";

   if(h>=12){
    session="PM";
  }

  if(s<10){
    s="0"+s;
  }
  if(m<10){
    s="0"+m;
  }
if(h<10){
    s="0"+h;
  }


  let time = `${h} : ${m} : ${s} : ${session}`;
  document.querySelector("h1").innerHTML=time;
  setTimeout(showTime, 1000);

 
}