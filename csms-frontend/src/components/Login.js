// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Updated styles are applied here

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login/', {
        username,
        password,
      });
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);  // Store the token for authentication
        navigate('/dashboard');  // Redirect to the dashboard
      }
    } catch (err) {
      console.log(err.response);  // Log error
      setError('Invalid username or password');
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder=" "  // Needed for floating label effect
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "  // Needed for floating label effect
          />
          <label htmlFor="password">Password</label>
        </div>
        {error && <p className="error">{error}</p>}  {/* Show error message */}
        <button type="submit" className="login_btn btn-primary">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;
