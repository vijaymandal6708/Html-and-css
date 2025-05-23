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

let array=[12,89,5,3,2,4];

for(let item of array){
  for(var i=2; i<item; i++){
    if(item%i==0){
      break;
    }
  }
  if(item==i){
    console.log(item);
  }
}




// Question - 10
// Write a javascript program to find the smallest value in an array?

// let arr = [ 2,7,4,11,10,6 ];
// let smallest = arr[0];

// for(let i=1; i<arr.length; i++){
//   if(arr[i]<smallest){
//     smallest=arr[i];
//   }
// }
// console.log(smallest);




// Question - 11
// Write a javascript program to find the sum of values of an array?

let array2 = [2,5,3,7,4,6,5];
let sum=0;

for(let i=0; i<array2.length; i++){
   sum = array2[i]+sum;
}
console.log(sum);




// Question - 12
// Write a javascript program to check the given string is palindrome or not?

function palindrome(data){
  let start = 0;
  let end = data.length-1;
  let result = true;
  while(end>start){
    if(data[start] != data[end]){
      result = false;
    }
    start++;
    end--;
  }
  return result;
}

let str10 = "eve";
console.log(palindrome(str10));




// Question - 13
// Write a javascript program to find current age of any person by using his/her date of birth?

function calculateAge (dob){
  const birthDate = new Date(dob);
  const dateDiffMs = Date.now() - birthDate.getTime();
  const ageYear = new Date(dateDiffMs);
  return Math.abs(ageYear.getUTCFullYear()-1970);
};

const dateOfBirth = "2000-06-02";
console.log("Result", calculateAge(dateOfBirth));


// Question - 14
// How to calculate the yesterday's date in javascript?

const today = new Date ();
const yesterday = (today.getDate()-1);
console.log(yesterday);


// Question - 15
// Write a javascript program to find the given year is leap year or not?

let year2 = prompt("Enter the year:");

if(year2%4==0 && year%400==0){
  console.log("The year is leap year.");
}
else{
  console.log("The year is not a leap year");
}
