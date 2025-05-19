// Question1

// let arr=[];
// for(let i=0; i<10; i++){
//   arr[i]= parseInt(prompt());
// }
// console.log(arr);

// Question2

// let sum=0;
// for(let i=0; i<10; i++){
//   sum=sum+arr[i];
// }
// console.log(sum);

// Question3

// const string = prompt("Enter a string:");

// console.log(string.reverse());



// console.log(new Date);


// function

// function is a block of code which is used to reduce the repetitive task

// function is used for code reusability

function Demo(){
  console.log("Hello Function");
}

Demo();

// wap to take a input from the user to the number is odd or even using function

// function OddEve(){
//   let a= prompt("enter a number");
//   if(a%2==0){
//     console.log("Even");
//   }
//   else{
//     console.log("Odd");
//   }
// }

// OddEve();

// wap to take a input from the user and print reverse table of that number

// function reverseTable(){
//   let a = prompt("Enter a number:");
//   for(let i=10; i>0; i--){
//     console.log(a*i);
//   }
// }

// reverseTable();

// wap to take two inputs from the user and check 2 input even or odd , if number is even then print the table of 1 input and if number is odd then print area of circle of second function

// types of function
// 4 types

// 1. no return no parameter

// function display1() {
//   console.log(10+20);
// }

// display1();

// // 2.return with no parameter
// function display2(){
//   return "hello";
// }

// let result = display2();
// console.log(result);
// // alert(result);

// // 3. parameter with no return
// function display3(x,y){
//   console.log(x+y);
// }

// display3(10,30);
// display3(34,56);

// // 4. parameter with return
// function display4(x,y){
//   return x*y;
// }

// let ans = display4(10,20);
// console.log(ans);


// practice

// function display5(){
//   console.log(prompt("enter name"));
// }

// display5();

// let name = prompt()

// function display6(){
//   return "goodafternoon";
// }

// let x= display6();
// console.log(x);

// function cube(x){
//   console.log(x*x*x);
// }

// cube(5);

// //object function

// function user1(person){
//   console.log(`person name is ${person.name} and age is ${person.age}`)
// }

// user1({
//   name:"john",
//   age:23,
// });

// function expression

// let myfunction = function(){
//   console.log("this is a function expression")
// };
//  myfunction();

//  function subtraction(x,y){
//   console.log(x-y);
//  };

//  subtraction(5,3);

//  // arrow function

//  let myfunction2=() =>{
//    console.log("hello")

//  }

//  myfunction2();

 
//  ------------ Question and Answers --------------

// Q1 
// Write a program check the number is odd or even using with argument and no return

// let num = prompt("Enter a number:");

// function oddEve (num){
//     if(num%2==0){
//       console.log("Even");
//     }
//     else{
//       console.log("Odd");
//     }
//   }

//   oddEve(num);


  //Q2

  let ob = {name:"ashu", age:"40" , city:"bhopal"}

  console.log(Object.keys(ob)[0]);

  //Q3

  let obj = {name:"ashu", age:"40", city:"bhopal", salary:"90"}

  console.log(Object.keys(obj));

  //Q4

  




