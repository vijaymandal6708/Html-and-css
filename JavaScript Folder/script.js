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


  // Q2 Write a program to print only one key of an object
  // let ob = { name: "ashu", age:40, city:"bhopal"}

  let ob = {name:"ashu", age:"40" , city:"bhopal"}

  console.log(Object.keys(ob)[0]);


  // Q3 Write a program to print all keys of an object
  // let ob = { name:"ashu", age:40, city:"bhopal", salary:90}

  let obj = {name:"ashu", age:"40", city:"bhopal", salary:"90"}

  console.log(Object.keys(obj));

  // Q4 Write a program to print sum of all 10 elements of an array without argument and return value

  function sumArray (){
    let array = [1,2,3,4,5,6,7,8,9,10];
    let sum=0;
    for(let i=0; i<10; i++){
      sum=array[i]+sum;
    }
    console.log(sum);
  }
  sumArray();


  // Q((5 Write a program to take input from the user and find area of circle using with argument and return value

   function areaOfCircle(r){
    const pi = 3.14;
    return pi*r*r;
  }
  let ans = areaOfCircle(5);
  console.log(ans);

  




