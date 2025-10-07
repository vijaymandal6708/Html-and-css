import React, { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState({});

  const handleOnChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log(e.target.value)

    setValue((prev) => ({
      ...prev,[name]: val
    }));
  };

  const handleSubmit = async () => {
    console.log(value);
    const response = await axios.post(api ,value);
    console.log(response);
    alert(response.data);
  };

  return (
    <div>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleOnChange} /> <br /><br />

        <label>Roll No: </label>
        <input type="text" name="rollno" onChange={handleOnChange} /> <br /><br />

        <label>City: </label>
        <input type="text" name="city" onChange={handleOnChange} /> <br /><br />

        <label>Fees: </label>
        <input type="text" name="fees" onChange={handleOnChange} /> <br /><br />

        <input type="submit" value="Add Student" onClick={handleSubmit}/>
    </div>
  );
};

export default Home;
