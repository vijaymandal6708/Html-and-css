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

