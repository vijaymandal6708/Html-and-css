import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Edit = () => {

  const [student,setStudent] = useState([]);
  
  useEffect(()=>{
    const loadData = async () => {
        const editResponse = await axios.get("http://localhost:9000/students/edit");
        setStudent(editResponse.data);
    }
    loadData();
  }, []);

  return (
    <>
      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
               student.map((i, index)=>(
                <tr key={index}>
                    <td>{i.name}</td>
                    <td>{i.rollno}</td>
                    <td>{i.city}</td>
                    <td>{i.fees}</td>
                    <td></td>
                </tr>
               ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Edit
