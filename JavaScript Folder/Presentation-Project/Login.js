let Login=()=>{

   let inpemail=document.querySelector("#email").value;
   let inppass=document.querySelector("#pass").value;

   let loginemail = localStorage.getItem("Email");
   let loginpass = localStorage.getItem("Password");

   if(inpemail==loginemail && inppass==loginpass){
    location.href="Home.html";
    return false;
   }
   else{
    alert("Wrong Credentials");
   }

   return false

};

let LogOut=()=>{
  console.log("hello");
  location.href="Sign-Up.html";
  localStorage.clear();

  return false;
};