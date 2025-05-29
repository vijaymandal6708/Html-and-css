// For Loop
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

// const fruits1 = ["apple","cherry","kiwi","grapes"];

// let text = "<ul>";

// fruits1.map(function (x) {
//   text += `<li>${x}</li>`;
// });

// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

const person1 = [
  {
    name:"john",
    age:23
  },
  {
    name:"harry",
    age:32
  },
  {
    name:"odin",
    age:53
  },
];

let table = `
<table border=1px>
<tr>
<th>Name</th>
<th>Age</th>
</tr>
`;

person1.map((x)=>{
  table += `
  <tr>
  <td>${x.name}</td>
  <td>${x.age}</td>
  </tr>
  `;
});

table += "</table>";

document.getElementById("mytable").innerHTML = table;

// filter

const numbers5 = [10,20,30,3523,34,53,9];

const newNumbers = numbers5.filter(function (x){
  if(x>30){
    return x;
  }
    
});
 console.log(newNumbers);

 const students = [
  {
    name:"Quincy", grade:96
  },
  {
    name:"Aman", grade:80
  },
  {
    name:"Mukesh", grade:70
  },
  {
    name:"Maar", grade:60
  },
  {
    name:"Thal", grade:90
  },
  {
    name:"Afani", grade:95
  }
 ];

 const studentsGrade = students.filter(function (x){
  if(x.grade>90){
    return x;
  }
 });

 console.log(studentsGrade);

 //1. How do you find the length of a string?

 //2. Write code to convert a string to uppercase

 //3. How do you check if a string includes a specific word?
 
 //4. Extract the word "world" from "hello world!"

 //5. What does the str.trim() do ?

 //6. differences b/w slice(), substr(), and substring()?

 //7. What does Math.floor() do?

 //8. Generate a random number b/w 0 to 1.

 //9. How do you get maximum value from [4,7,1,9]?

 //10. What is the differences b/w Math.round() and Math.ceil()?

 //11. Write a function to generate a random integer between two values , inclusive.

 //12. What is returned by Math.abs(-42)?

 //13. What is difference b/w map() and forEach()?

 //14. How do you remove the last element of an array?

 //15. Write code to sort an array of numbers in ascending order.?

 //16. What does array.splice() do?

 //17. Use reduce() to sum an array of numbers.

 //18. How do you check if all items in an array are numbers?

 //19. How do you flatten a nested array [[1],[2,3],[4]]?

 //20. How do you access the value of property in an object?

 //21. How do you loop through all keys in an object?

 //22. What is the difference b/w dot notation and bracket notation?

 //23. How do you select an element by its ID?

 //24. What does document.querySelector('.class') return?

 //25. How do you change the text content of a DOM element?

 //26. What is difference b/w innerText, textContent, and innerHTML?

 // Ans1
 let str="javascript";
 console.log(str.length);

 // Ans2
 let str2="this is javascript";
 console.log(str2.toUpperCase());

 // Ans3
 let str3 = "this is cybrom technology pvt. ltd.";
 console.log(str3.includes("cybrom"));

 // Ans4
 let str4 = "Hello world!";
 console.log(str4.slice(6,11));

 // Ans5
 // str.trim() will remove the all blank space from the start and end
 let str5 = "  hello javascript ";
 console.log(str5.trim());

 // Ans6
 

 //Ans7
 // Math.floor() will round off the the number to the lower end
 // If a number is 4.99 then it will round off it 4
 let number = 4.99;
 console.log(Math.floor(number));

 // Ans8
 let randomNumber = Math.random();
 console.log(randomNumber);

 // Ans9
 let array10 = [2,8,7,5,3,2,1];
 let max=(Math.max(array10));
 console.log(max);

 // Ans10
 // Math.round() rounds off from 0.0-0.49 to lower value and 0.50-0.99 to upper value
 let number2= 5.5;
 console.log(Math.round(number2));

 let number3= 5.99;
 console.log(Math.round(number3));
// Math.ceil() rounds in a way that if any number has the decimal value then it rounds off to the upper value
let number4 = 3.01;
console.log(Math.ceil(number4));


// Ans11

function random (x,y){
  return 
}

