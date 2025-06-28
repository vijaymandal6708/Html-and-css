
document.querySelector("#check").addEventListener("click", function(){
  let First=(document.querySelector("#first").value).split("").sort().join();
  let Second=(document.querySelector("#second").value).split("").sort().join();
  console.log(First);
  
  if(First==Second){
    document.querySelector("#show").innerHTML="yes";
  }
  else{
    document.querySelector("#show").innerHTML="no"; 
  }
})