
document.write(number);

function rollDice() {
  
  let number=0;

  number = parseInt((Math.random()*6)+1);
  
  if(number==1){
  document.querySelector('#number1').style.display='flex';
  document.querySelector('#number2').style.display='none';
  document.querySelector('#number3').style.display='none';
  document.querySelector('#number4').style.display='none';
  document.querySelector('#number5').style.display='none';
  document.querySelector('#number6').style.display='none';
}
else if(number==2){
  document.querySelector('#number2').style.display='flex';
  document.querySelector('#number1').style.display='none';
  document.querySelector('#number3').style.display='none';
  document.querySelector('#number4').style.display='none';
  document.querySelector('#number5').style.display='none';
  document.querySelector('#number6').style.display='none';
}
else if(number==3){
  document.querySelector('#number3').style.display='flex';
  document.querySelector('#number1').style.display='none';
  document.querySelector('#number2').style.display='none';
  document.querySelector('#number4').style.display='none';
  document.querySelector('#number5').style.display='none';
  document.querySelector('#number6').style.display='none';
}
else if(number==4){
  document.querySelector('#number4').style.display='grid';
  document.querySelector('#number1').style.display='none';
  document.querySelector('#number2').style.display='none';
  document.querySelector('#number3').style.display='none';
  document.querySelector('#number5').style.display='none';
  document.querySelector('#number6').style.display='none';
}
else if(number==5){
  document.querySelector('#number5').style.display='flex';
  document.querySelector('#number1').style.display='none';
  document.querySelector('#number2').style.display='none';
  document.querySelector('#number3').style.display='none';
  document.querySelector('#number4').style.display='none';
  document.querySelector('#number6').style.display='none';
}
else{
  document.querySelector('#number6').style.display='grid';
  document.querySelector('#number1').style.display='none';
  document.querySelector('#number2').style.display='none';
  document.querySelector('#number3').style.display='none';
  document.querySelector('#number4').style.display='none';
  document.querySelector('#number5').style.display='none';
}

};



