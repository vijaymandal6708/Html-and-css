//let length = prompt("enter the length:");
//let width = prompt("enter the width");

//console.log(length*width);

// spread operator
// it copies a part of an array or a complete array to another array

// const num1=[10,20,30,40];

// const num2=[60,70,80,90,100];

// const num3=[...num1, ...num2];

// console.log(num3);

// const arr=[1,2,3,4,5];

// arr.push()
// arr.unshift(0);
// arr.reverse();

// console.log(arr);

// const person={
//   name:"john",
//   age:45,
//   isEligible: true,
//   adress: {
//     state:"mp",
//     country:"india"
//   },
//   hobbies:["dance","singing"]
// }

// // update
// person.age=67;

// // add
// person.hasAddress= true;
// console.log(person);

// spreadoperator (...)
// const obj1= {
//   a:1,
//   b:2,
// };

// const obj2 = {
//   c:3,
//   d:4,
// };

// const obj3= {...obj1, ...obj2};
// console.log(obj3);

// console.log(person.name);
// console.log(person['name']);
// console.log(person.isEligible);
// console.log(person.adress.country);
// console.log(person.hobbies[1]);
// person.greet();

// for(i=0; i<10; i++){
//   let a = prompt("enter value:");
//   console.log(a);
// }

// let a = prompt("enter first value");
// let b = prompt("enter second value");
// let c = prompt("enter third value");
// let d = prompt("enter fourth value");
// let e = prompt("enter fif value");
// let f = prompt("enter first value");
// let g = prompt("enter first value");
// let h = prompt("enter first value");
// let i = prompt("enter first value");
// let j = prompt("enter first value");

// console.log(a);

// let arr = [];
// for(let i=0; i<10; i++){
//   arr[i] = prompt("Enter number");
// }
// for(let i=0; i<10; i++){
//   console.log(arr[i]);
// }

// array of objects
const students = [
  { name:"ram", id:1, course:"frontend"},
  { name:"rohit", id:2, course:"backend"},
  { name:"rishabh", id:3, course:"fullstack"},
  { name:"gaurav", id:4, course:"python"},
]

console.log(students[0].course);
console.log(students[1].name + "" +students[1].id + ""+students[1].course);
console.log(`${students[2].name}  ${students[2].id}  ${students[2].course}`)

// destructuring
const car={
  color:"red",
  model:2024,
  brand:"ford"
};

const a=car.color;
const b=car.model;

const{ color, model, brand }= car;

console.log(color,model,brand);

const{color:a, model:b, model:c}=car;
console.log(a,b,c);

// object to json string
const user = {
  name:"john",
  id:1,
  age:32,
  city:"bhopal"
};
console.log(user);

const data = JSON.stringify(user);
console.log(data);

// json string to object
const updatedData= JSON.parse(data);
console.log(updatedData);

const library =[
  { title:physics,
    
  },
  {},
  {},
]