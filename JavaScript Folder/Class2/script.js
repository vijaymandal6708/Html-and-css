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
// the Javascript for in statement loops through the properties of an object

// Syntax

const person = {
  name:"john",
  age:34,
  city:"bhopal",
};

for(let x in person){
  console.log(x);
  console.log(person[x]);
}
 
// in for in loop x denotes the index number of an array
const numbers = [10,20,30,50];

for(let x in numbers){
  console.log(x);
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
// For Each loop needs a callback function
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

 const numbers1 = [123,23,432];
 const value = numbers1.reduce(myfunction5);

 function myfunction5(total,num){
  return total+num;
 };
 console.log(value);

 const array3 = [2,3,5];
 let i2=0;

 for(item in array3){
  
  i2=i2+item;
 }
 console.log(i2);

 // Ans1
 const fruits3 = ["apple", "banana", "grapes", "kiwi", "cherry"];
 console.log(fruits3[2]);

 // Ans2
 const numbers6 = [5,10,15,20];
 console.log(numbers6.push(25));
 console.log(numbers6);

 // Ans3
 const numbers7 = [6,12,18,24];
 numbers7.shift();
 console.log(numbers7);

 // Ans4
 const detail = ["vijay", 23, "bhopal"];
 console.log(detail.includes(23));

 // Ans5
 const array4 = [10,20,30,40];
 for(let i=0; i<4; i++){
  console.log(array4[i]);
 }

 // Ans6
 const person2 = {name:"parshram", age:23};
 console.log(person2.name);

 // Ans7
 const person3 = {name:"aditya",age:22,}
 person3.city="bhopal";
 console.log(person3);


 // ------------------------------------------------------------------------------------------------------------------------------------

 // For In Loop

 let array5 = [4,5,6,7,8,9];
 let obj3 = { name:"Atul",age:"20",city:"bhopal"}

 for(let x in array5){
  console.log(x);
  console.log("The value is",array5[x]);
 };

 for(let x in obj3){
  console.log(x);
  console.log(obj3[x]);
 };

 // sum of array elements print program
 // console outside the loop
 
 sum = 0;
 for(let x in array5){
  sum=sum+array5[x];
 }
 console.log(sum);

 // sum of array elements print program
 // console inside the loop

 add = 0;
 for(let x in array5){
  add=add+array5[x];
  if(x==array5.length-1){
    console.log(add);
  }
 }

// --------------------------------------------------------------
// For Of Loop

for(let x of array5){
  console.log(x);
}

for(let x of Object.keys(obj3)){
  console.log(x);
}

for(let x of Object.values(obj3)){
  console.log(x);
}

for(let x of Object.entries(obj3)){
  console.log(x);
}

// sum of array

sum1=0;
for(let x of array5){
  sum1 = sum1+x;
}
console.log(sum1);

// ---------------------------------------------------------------
// For Each Loop

array5.forEach(printElement);

function printElement(x){
  console.log(x);
}

// object
Object.entries(obj3).forEach(x => {
  console.log(x);
})

// sum of array

let sum2=0;
array5.forEach(sumArray);

function sumArray(x) {
  sum2=sum2+x;
}
console.log(sum2);

// ---------------------------------------------------------------
// Map method






 
 
 
 
 
 
 

 
 
 
 
 


