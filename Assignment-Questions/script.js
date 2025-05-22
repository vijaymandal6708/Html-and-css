// Question - 1
// How to get the first three character of a string?

let str1 = "hello";
let str2 = str1.slice(0,3);
console.log(str2);




// Question - 2
// Delete first character of a string

let str3 = "!hello world";

let str4 = str3.slice(1);
console.log(str4);

let str5 = str3.substring(1);
console.log(str5);

let str6 = str3.substr(1);
console.log(str6);




// Question - 3
// Sort an array of strings

let names = ["Vijay", "Aditya", "Pawan", "Atul"];
console.log(names);
names.sort();
console.log(names);

// Question - 4
// How to remove all line breaks from a string

let text = "this is\n a \nstring";
text = text.replace(/(\n)/gm, "");
console.log(text);




// Question - 5
// Extract a number from a string using javascript?
let phrase = "Worlds first 95 degree ultra wide amgle 110 front camera";

// method1
let numbers = phrase.replace(/\D/g, '');
console.log(numbers);

// method2
// let reg = /\d+/g;
let result = phrase.match(/\d+/g);
console.log(result);




// Question - 6
// Convert string into date using javascript.

let date = "30.09.2021";
let time = "13:2224.990";

var year = date.slice(6,10);
var month = date.slice(3,5);
var day = date.slice(0,2);

var slice1 = time.slice(0,5);
var slice2 = time.slice(5,13);

var newTime = slice1 + ":" + slice2;

const newDate = new Date(year + "-" + month + "-" + day + "T" + newTime);

var seconds = newDate.getTime() / 1000;
console.log("Timestamp: " + seconds);
console.log(newDate);

const date1 = new Date();
console.log(date1);




// Question - 7
// Insert a string at a specific index.

let str7 = "Hello World";
let str8 = " Amazing";
const index = 5;

const s1 = str7.slice(0,index);
const s2 = str7.slice(index);

const res = `${s1}${str8}${s2}`;
console.log(res);




// Question - 8
// How to find the longest word within the string in javascript?

let input = "How to find largest word from the given sentence";

function largestWord(str){
  let words = str.split(" ");
  let output = "";

  for(let i of words){
    if(i.length>output.length){
      output=i;
    }
  }
  return output;
}
console.log(largestWord(input));


// Question - 9
// Write a javascript program to find the prime number in a given array?
 
function isPrime(n){
  if(n<=1){
    return false;
  }
  for(let i=2; i<n; i++){
    if(n%i==0){
      return false;
    }
  }
  else{
    return true;
  }
}
isPrime(5);




// Question - 10
// Write a javascript program to find the smallest value in an array?


// Question - 11
// Write a javascript program to find the sum of values of an array?


// Question - 12
// Write a javascript program to check the given string is palindrome or not?


// Question - 13
// Write a javascript program to find current age of any person by using his/her date of birth?


// Question - 14
// How to calculate the yesterday's date in javascript?



// Question - 15
// Write a javascript program to find the given year is leap year or not?



