// Question1

function addition(){
  let a1 = parseFloat(document.getElementById("input1").value);
  let a2 = parseFloat(document.getElementById("input2").value);

  let a3 = document.getElementById("ans");
  a3.innerText = parseFloat(a1+a2);
};

function subtraction(){
  let a1 = parseFloat(document.getElementById("input1").value);
  let a2 = parseFloat(document.getElementById("input2").value);

  let a3 = document.getElementById("ans");
  a3.innerText = parseFloat(a1-a2);
};

function multiplication(){
  let a1 = parseFloat(document.getElementById("input1").value);
  let a2 = parseFloat(document.getElementById("input2").value);

  let a3 = document.getElementById("ans");
  a3.innerText = parseFloat(a1*a2);
};

function division(){
  let a1 = parseFloat(document.getElementById("input1").value);
  let a2 = parseFloat(document.getElementById("input2").value);

  let a3 = document.getElementById("ans");
  a3.innerText = parseFloat(a1/a2);
};

// Question2

let str= "welcome to the google,Bhopal,we are google student we learning js in google";

console.log(str.replaceAll("google","cybrom"));

// Question3

function generateRandomPassword (){
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&";
  let password = "";
  for(let i=0; i<8; i++){
    const random = Math.floor(Math.random()*str.length);
    password += str[random];
  }
  console.log(password);
};

generateRandomPassword();

// Question4

for(let i=1; i<=10; i++){
  console.log(i);
}

let i=1;
while(i<=100){
  console.log(i);
  i++;
}
// do{
//   console.log(i);
// }
// while(i<10)

for(let i=1; i<=100; i++){
  if(i%2==0){
  console.log(i);
  }
}

// For In Loop
// the Javascript for in statement loops through thr properties of an object

// Syntax

const person = {
  name:"john",
  age:34,
  city:"bhopal",
};

for(let x in person){
  console.log(person[x]);
  console.log(x);
}
 
// in for on loop x denotes the index number of an array
const numbers = [10,20,30,50];

for(let x in numbers){
  console.log(numbers[x]);
}

// For of loop
// x denotes the element of an array

const array1 = [100,200,300,400];

for(let x of array1){
  console.log(x);
}

let str1= "javascript";

for(let x of str1){
  console.log(x);
}

// For Each Loop
// Array.forEach()
// for each method calls a function (a callback function) once for each array element.

const num = [34,45,234,13];

text = "";
num.forEach(myfunction);

function myfunction(x){
  text += x + "";
}
console.log(text);

const num2 = [10,20,30,40,50];

num2.forEach(myfuction2);

function myfuction2(y){
  console.log(y*y);
}

const fruits = ["apple","banana","kiwi"];

fruits.forEach(myfuction3);

function myfuction3(z){
  console.log(z);
}

//Map method
//
const num1=[1,2,3,4,5];
const newArray = num1.map(myfunction4);

function myfunction4(x){
  return x*x;
}

console.log(newArray);


