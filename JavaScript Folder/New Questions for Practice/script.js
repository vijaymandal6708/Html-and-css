//Question1

let val;
document.querySelector('#mybtn').addEventListener("click", function(){
  val = prompt("color");
  console.log(val);
})

document.querySelector('#disp').addEventListener("click", function(){
  document.querySelector("#head3").innerHTML=`Your Favorite Color is:${val}`;
})

//---------------------------------------------

// Question2

let val2;

document.querySelector('#button4').addEventListener("click", function(){
  val2=prompt("Enter a sentence").toUpperCase();
  document.querySelector('#ques2').innerHTML=`Your Sentence is:${val2}`;~

})

// Question3

function calcSum(event){
  event.preventDefault();
  let Val1=parseInt(document.querySelector("#input1").value);
  let result=document.querySelector("#result");

  let sum = (Val1*(Val1+1))/2;
  result.innerHTML=`Sum of Numbers is:${sum}`;
}

//--------------------------------------------------------------

// Question 4
