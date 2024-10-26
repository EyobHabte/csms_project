import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [employmentId, setEmploymentId] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('full_name', fullName);
      formData.append('phone_number', phoneNumber);
      formData.append('email', email);
      formData.append('employment_id', employmentId);
      formData.append('password', password);

      const response = await axios.post('http://localhost:8000/api/auth/register/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        navigate('/login');  // Redirect to login page on success
      }
    } catch (err) {
      console.error("Error during registration:", err.response);
      setError('Error during registration. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder=" " /* Ensure placeholder is empty for floating effect */
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="fullName">Full Name</label>
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phoneNumber"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="email">Email (optional)</label>
        </div>
        <div className="form-group">
          <input
            type="file"
            id="employmentId"
            className="form-control"
            onChange={(e) => setEmploymentId(e.target.files[0])}
          />
          <label htmlFor="employmentId">Upload Employment ID</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="reg_btn btn-primary">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;
