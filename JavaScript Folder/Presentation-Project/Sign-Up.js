let Signup=()=>{

  let Name=document.querySelector("#name").value.trim();
  let Email=document.querySelector("#email").value.trim();
  let Num=document.querySelector("#number").value.trim();
  let Pass=document.querySelector("#pass").value.trim();
  let CPass=document.querySelector("#cpass").value.trim();

  let errname=document.querySelector("#errname");
  let erremail=document.querySelector("#erremail");
  let errnum=document.querySelector("#errnum");
  let errpass=document.querySelector("#errpass");
  let errcpass=document.querySelector("#errcpass");

    errname.innerHTML="";
    erremail.innerHTML="";
    errnum.innerHTML="";
    errpass.innerHTML="";
    errcpass.innerHTML="";



  if(Name==""){
    errname.innerHTML="Please Enter Name";
    errname.style.color="red";
    return false
  }

  else if(Email==""){
    erremail.innerHTML="Please Enter Email";
    return false
  }

  else if(!(Email.includes("@") && Email.includes(".com"))){
    erremail.innerHTML="Please Enter a Valid Email";
    return false
  }


  else if(Num.length!=10){
    errnum.innerHTML="Please Enter Valid Number";
 
    return false
  }

  else if(isNaN(Num)){
    errnum.innerHTML="Please Enter Number Only";

    return false
  }

  else if(Pass==""){
    errpass.innerHTML="Please Enter a Password";

    return false
  }

  else if(CPass==""){
    errcpass.innerHTML="Please Enter Confirm Password";
    return false
  }

  
  else if(Pass!=CPass){
    errpass.innerHTML="Please Enter Same Password";

    document.querySelector("#cpass").value=""
    document.querySelector("#cpass").focus()
    return false
  }
  else if(!(Pass.match(/[1234567890]/) && Pass.match(/[!@#$%^&*]/) && Pass.match(/[a-z]/)
  && Pass.match(/[A-Z]/))){

  errpass.innerHTML="Please Enter Strong Password";
  return false
}

localStorage.setItem("Name",Name);
localStorage.setItem("Email",Email);
localStorage.setItem("Contact Number",Num);
localStorage.setItem("Password",Pass);

location.href="Login.html";
return false
}

