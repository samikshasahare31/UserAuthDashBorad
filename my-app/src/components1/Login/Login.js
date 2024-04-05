// Modify your Login component to save user information to local storage after successful login
import React, { useState } from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password: pass })
    };

    const response = await fetch('http://localhost:8000/login', requestOptions);
    const data = await response.json();

    if (response.status === 200) {
      // Save user information to local storage
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard')
      toast.success("Login Successfully!");
    } else {
      toast.error("Invalid password or username");
    }
  }

  return (
    <>
      <div className="LoginBody">
      <div className='wrapper'>
        <form onSubmit={handleSubmit} action="">
          <h1>Login</h1>
          <div className="input-box">
            <input value={email} type="text" placeholder='Username' required onChange={(e) => setEmail(e.target.value)} />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input value={pass} type="password" placeholder='Password' required onChange={(e) => setPass(e.target.value)} />
            <FaLock className='icon' />
          </div>
          <button type="submit">Login</button>
          <div className='register-link'>
            <p onClick={() => navigate('/register')}>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login;
