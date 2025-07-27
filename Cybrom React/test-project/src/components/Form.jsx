function Form(){


    function handleinput(e) {
          
         console.log(e.target.value);

       }


    return(

        
        <>
        
          <h1>Form</h1>
          <form action="">
            <label htmlFor="">Name : </label>
            <input type="text" onChange={handleinput}/> <br /> <br />

            <label htmlFor="">Age : </label>
            <input type="text" /> <br /> <br />

            <label htmlFor="">Password : </label>
            <input type="text" />
          </form>

        </>
    )

}

export default Form