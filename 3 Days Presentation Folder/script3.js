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

function reverseTable(){
  let a = prompt("Enter a number:");
  for(let i=10; i<=a; i--){
    a=a*i;
    console.log(a);
    console.log("");
  }
}

reverseTable();
