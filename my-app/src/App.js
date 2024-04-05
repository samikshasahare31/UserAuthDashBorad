import React, { useEffect, useState } from 'react';
import Login from './components1/Login/Login';
import Register from './components1/Login/Register';
import ProtectedTable from './components1/ProtectedTable';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components1/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components1/Home';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [user, setUser] = useState(null);

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <>
    <ToastContainer />
    <BrowserRouter>
    <Routes>
      {/* {user ? (
        <ProtectedTable user={user} />
      ) : ( */}
       {/* { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> } */}
       <Route path="/dashboard" element={<Dashboard />} />

       <Route path="/" element={<Login />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/home" element={<Home />} />
       <Route path="/users" element={<ProtectedTable />} />



      {/* )} */}
    </Routes>
     </BrowserRouter>
    </>

  );
}

export default App;


/**
 * import React, { useEffect, useState } from 'react';
import Login from './components1/Login/Login';
import Register from './components1/Login/Register';
import ProtectedTable from './components1/ProtectedTable';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components1/DashBoard';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [user, setUser] = useState(null);

  const toggleForm = (forName) => {
    console.log('forName',forName);
    setCurrentForm(forName);
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
      );
    }
    
    export default App;
    
 */