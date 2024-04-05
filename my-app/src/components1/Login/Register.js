import React, { useState } from "react";
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  const handleLogin = async () => {
    console.log("EMAIL", email, pass);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password: pass })
    };

    console.log('BODY', requestOptions);
    const Response = await fetch('http://localhost:8000/login', requestOptions)
    console.log("🚀 ~ handleLogin ~ Response:", Response.status)
    const res = await Response.json()
    console.log("🚀 ~ handleLogin ~ res:", res)
    if (Response.status === 200) {
      toast.success("Login Successfully!");
    } else {
      toast.error("Invalid password or username");
    }

  }


  return (
    <>
      <ToastContainer />
      <div className="LoginBody">
      <div className='wrapper'>
        {/* <label htmlFor="email">Email</label> */}
        <form onSubmit={handleSubmit} action="">
          <h1>Register</h1>
          <div className="input-box">
            <input value={email} type="text" placeholder='Name' required onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input value={date} type="date" placeholder='Date of Birth' required onChange={(e) => {
              setEmail(e.target.value)
            }} />
          </div>
          <div className="input-box">
            <input value={email} type="text" placeholder='userName' required onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input value={pass} type="password" placeholder='Password' required onChange={(e) => {
              setPass(e.target.value)
            }} />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remeber me</label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit" onClick={handleLogin}>Login</button>
          <div className='register-link'>
            <p onClick={() => navigate('/login')}>Don't have an account? <a href="#">Register</a></p>
          </div>


        </form>

      </div>
      </div>
    </>
  )
}

export default Register;