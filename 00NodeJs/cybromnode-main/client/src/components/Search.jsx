import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [rno, setRno] = useState('');
  const [mydata, setMydata] = useState([]);

  const handleSubmit = async () => {
    try {
      const api = 'http://localhost:3001/students/search';
      const response = await axios.post(api, { rno: rno });
      console.log('✅ Response:', response.data);
      setMydata(response.data);
    } catch (err) {
      console.error('❌ Error fetching data:', err);
      alert('Error fetching student data');
    }
  };

  return (
    <>
      <h1>Search Data</h1>

      <label>
        Enter Roll No:{' '}
        <input
          type="text"
          name="rno"
          value={rno}
          onChange={(e) => setRno(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Search</button>

      <hr />

      {mydata.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((student, index) => (
              <tr key={index}>
                <td>{student.rollno}</td>
                <td>{student.name}</td>
                <td>{student.city}</td>
                <td>{student.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data found.</p>
      )}
    </>
  );
};

export default Search;
