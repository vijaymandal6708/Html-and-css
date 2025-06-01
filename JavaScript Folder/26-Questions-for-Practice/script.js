//1. How do you find the length of a string?
 // Ans1
 let str="javascript";
 console.log(str.length);



 //2. Write code to convert a string to uppercase
 // Ans2
 let str2="this is javascript";
 console.log(str2.toUpperCase());



 //3. How do you check if a string includes a specific word?
 // Ans3
 let str3 = "this is cybrom technology pvt. ltd.";
 console.log(str3.includes("cybrom"));



 //4. Extract the word "world" from "hello world!".
 // Ans4
 let str4 = "Hello world!";
 console.log(str4.slice(6,11));



 //5. What does the str.trim() do ?
 // Ans5
 // str.trim() will remove the all blank space from the start and end
 let str5 = "  hello javascript ";
 console.log(str5.trim());



 //6. differences b/w slice(), substr(), and substring()?
 // Ans6

 //7. What does Math.floor() do?
 //Ans7
 // Math.floor() will round off the the number to the lower end
 // If a number is 4.99 then it will round off it 4
 let number = 4.99;
 console.log(Math.floor(number));



 //8. Generate a random number b/w 0 to 1.
 // Ans8
 let randomNumber = Math.random();
 console.log(randomNumber);



 //9. How do you get maximum value from [4,7,1,9]?
 // Ans9
 let array10 = [2,7,5,3,2,1];
 let max=(Math.max(4,7,1,9));
 let max2=(Math.max(...array10));
 console.log(max);
 console.log(max2);



 //10. What is the differences b/w Math.round() and Math.ceil()?
 // Ans10
 // Math.round() rounds off from 0.0-0.49 to lower value and 0.50-0.99 to upper value
 let number2= 5.5;
 console.log(Math.round(number2));
 let number3= 5.99;
 console.log(Math.round(number3));
 // Math.ceil() rounds in a way that if any number has the decimal value then it rounds off to the upper value
 let number4 = 3.01;
 console.log(Math.ceil(number4));



 //11. Write a function to generate a random integer between two values , inclusive.
 // Ans11

 function random (x,y){
  return parseInt(Math.random()*((y+1)-x)+x);
 }

 let randomCont = random(10,50);
 console.log(randomCont);



 //12. What is returned by Math.abs(-42)?
 // Math.abs() always returns the positive value if we give -42 in input it gives 42 as output and if we give 42 then it does not changes anything
 console.log(Math.abs(-42));
 console.log(Math.abs(42));



 //13. What is difference b/w map() and forEach()?
 // map is a method that returns a new array with the results of applying a function to each element of original array.
 // forEach executes the provided function for each element but does not return anything (it implicitly returns undefined)



 //14. How do you remove the last element of an array?
 // Ans14
 const array11 = [10,20,30,40,50];
 console.log(array11.pop());
 console.log(array11);



 //15. Write code to sort an array of numbers in ascending order.?
 const array12 = [12,11,5,13,15];
 console.log(array12.sort());



 //16. What does array.splice() do?
 // Ans16 array.splice() is used to remove,replace or insert items starting at a chosen index.
 const fruits2 = ["banana", "apple", "kiwi", "grapes", "pomegranate", "papaya", "melon"];

 // splice() for removing element from any specific index
 console.log(fruits2.splice(3,2));
 console.log(fruits2);

 // splice() for replacing any specific items
 console.log(fruits2.splice(3,2,"avocado", "cherry"));
 console.log(fruits2);

 // splice() for inserting element to any specific index
 console.log(fruits2.splice(2,0,"pear","dragonfruit"));
 console.log(fruits2);



 //17. Use reduce() to sum an array of numbers.
 const sumArray = [1,2,3].reduce(add,0);

 function add(accumulator,a){
  return accumulator+a;
 }
 console.log(sumArray);


 //18. How do you check if all items in an array are numbers?

 //19. How do you flatten a nested array [[1],[2,3],[4]]?
 const array2 = [[1],[2,3],[4]];
 console.log(array2.flat());

 //20. How do you access the value of property in an object?
 let obj = {
  name:"Vijay",
  age:23,
  city:"Bhopal",
 };
 
 console.log(obj.city);
 console.log(obj["city"]);
 



 //21. How do you loop through all keys in an object?
 const obj1 = {a:1, b:2, c:3};

 for (const key in obj1){
  console.log(key);
 }


 //22. What is the difference b/w dot notation and bracket notation?
 // Dot notation and Bracket notation both are used to access object properties. 
 // Dot notation is concise and suitable for accesing properties with valid identifiers.
 let obj2 = {name:"Aditya", "#age":22, city:"Vapi"};
 console.log(obj2);
 // Bracket notation is more flexible,allowing access to properties with special characters,spaces,or when the property name is stored in a variable.
 console.log(obj2["#age"]);

 //23. How do you select an element by its ID?
 // Any element can be selected by the id with method called document.getElementById("id")
 let x = document.getElementById("heading");
 x.innerText = "This is javascript";
 

 //24. What does document.querySelector('.class') return?
 // document.queryselector('.class') returns a html collection
 let y = document.getElementsByClassName("heading2");
 console.log(y);

 //25. How do you change the text content of a DOM element?
 // We can change the text content of a DOM element by using innerText and innerHTML properties
 let z = document.getElementById("heading3");
 z.innerText = "This is heading 3 innerText";
 z.innerHTML = "This is heading 3 innerHTML";
 z.textContent = "This is heading 3 HTML";

 //26. What is difference b/w innerText, textContent, and innerHTML?
