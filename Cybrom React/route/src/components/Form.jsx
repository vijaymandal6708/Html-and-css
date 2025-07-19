function Form() {

  return(
    <>

      <form align="center">
         <p id="errname"></p>
         Enter Name <input type="text" id="name"/> <br/> <br/>

         <p id="erremail"></p>
         Enter Email <input type="text" id="email"/> <br/> <br/>

         <p id="errnum"></p>
         Enter Number <input type="text" id="number"/> <br/> <br/>

         <p id="errpass"></p>
         Enter Password <input type="text" id="pass"/> <br/> <br/>

         <p id="errcpass"></p>
         Confirm Password <input type="text" id="cpass"/> <br/> <br/>

         <input type="submit" value="Sign-Up" onClick="return Validate()"/>
         <p>Hello</p>

      </form>

    </>
  )
  
}

export default Form