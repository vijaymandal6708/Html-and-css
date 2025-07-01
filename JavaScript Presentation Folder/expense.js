let balance=document.querySelector("#balance");
// let budget=document.querySelector("#budget").value;
let addbudget=document.querySelector("#add-budget");
let addexpense=parseInt(document.querySelector("#expense").value);

console.log();


function diff(){
   balance.innerHTML = balance-addexpense; 
}