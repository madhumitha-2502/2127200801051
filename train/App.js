import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  }

  const handleAccessCodeChange = (event) => {
    setAccessCode(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API call to register the company and obtain the authentication token
      const response = await axios.post('API_ENDPOINT_URL', {
        rollNumber,
        accessCode,
      });
      
      const authToken = response.data.authToken;
      // Store the authentication token in localStorage or a global state management solution
      
      // Redirect the user to the dashboard page or perform any other necessary actions
    } catch (error) {
      // Handle registration errors, such as displaying an error message to the user
    }
  }

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Roll Number:</label>
          <input type="text" value={rollNumber} onChange={handleRollNumberChange} />
        </div>
        <div>
          <label>Access Code:</label>
          <input type="password" value={accessCode} onChange={handleAccessCodeChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
