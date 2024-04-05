import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Home from './Home';
import ProtectedTable from './ProtectedTable';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
<div>
<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px", height:"45rem"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <span className="fs-4">Sidebar</span> */}
    </a>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
    {/* <ProtectedTable/> */}
    <button className="nav-link active w-100" onClick={()=>{
      // navigate('/home')
      }}>Home</button>

        {/* <a href="#" className="nav-link active" aria-current="page">
         Home
        </a> */}
      </li>
      <li>
      <button className="nav-link text-white" onClick={()=>{navigate('/users')}}>User</button>

      </li>
      <li>
      <button className="nav-link text-white" onClick={()=>{navigate('/register')}}>

        Sing up
        </button>
      </li>
      <li>
      <button className="nav-link text-white" onClick={()=>{navigate('/login')}}>
      Log out
        </button>
      </li>
      <li>
    
      </li>
    </ul>
  
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        {/* <li><hr className="dropdown-divider"></li> */}
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  </div>
  );
}

export default Dashboard;
