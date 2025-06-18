import React from "react";
import "./Header.css";
import axios from 'axios';
import { NavLink, Link } from "react-router-dom";
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import "./Navbar.css"
import { useState } from 'react';

const Navbar = (props) => {
  var propsData=(String(props.userId));
  const [uname, setUname] = useState('');
  const logoutOnChange=()=>{
    alert("You have been successfully logged out");
  }
  const navigate = useNavigate();
  function toInfo()
  {
    navigate('/');
  }
  function toDashboard()
  {
    navigate('/dashboard', {state:{id:props.userId}});
  }
  function toMarketWatch()
  {
    navigate('/about', {state:{id:props.userId}});
  }

  function toPortfolio()
  {
    navigate('/profile', {state:{id:props.userId}});
  }

  const getUserName=()=>{
      
    axios.get("http://localhost:8080/api/"+propsData)
    .then((res)=>{
      setUname(res.data.uname)
      // console.log(res.data.uname);
    })
  }
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light">

        {/* <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
        </NavLink> */}

        {/* <NavLink className="navbar-item" activeClassName="is-active" to="/about">
              About
        </NavLink> */}

        {/* <NavLink className="navbar-item" activeClassName="is-active" to="/profile">
              Profile
        </NavLink> */}

      {/* natwest logo */}
      <div className="container-fluid">
      <img src="images/natwest_logo1.png" className="myimgH" height='70px'/>
      

      {/* <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{backgroundColor:'white'}}>
            <span class="navbar-toggler-icon"></span>
      </button> */}

      
        <ul className="navbar-nav">
          {/* Dashboard */}
          
          <li className="nav-item active" style={{color:'white'}} >
          <Link className="navbar-brand navbarN" to='/dashboard' state={{id:props.userId}}>Dashboard</Link>            {/* <Link className="navbar-item" activeClassName="is-active" to="/" style={{color:'white', fontFamily:'sans-serif'}}>
              Dashboard
            </Link> */}
            {/* <a className="nav-link" href="#" style={{color:'white', fontFamily:'sans-serif'}}>
              Dashboard
            </a> */}
          </li>

          <li className="nav-item" style={{marginLeft:'10px'}}>
          <Link className="navbar-brand navbarN" to='/about' state={{id:props.userId}}>Marketwatch</Link>
            {/* <NavLink className="navbar-item" activeClassName="is-active" to="/about" style={{color:'white', fontFamily:'sans-serif'}}>
                Marketwatch
            </NavLink> */}
            {/* <a className="nav-link" href="#" style={{color:'white', fontFamily:'sans-serif'}}>
              Marketwatch
            </a> */}
          </li>

          <li className="nav-item" style={{marginLeft:'10px'}}>
          <Link className="navbar-brand navbarN" to='/profile' state={{id:props.userId}}>PortFolio</Link>
            {/* <NavLink className="navbar-item" activeClassName="is-active" to="/" style={{color:'white', fontFamily:'sans-serif'}}>
              Portfolios
            </NavLink> */}
            {/* <a className="nav-link" href="#" style={{color:'white', fontFamily:'sans-serif'}}>
              Portfolios
            </a> */}
          </li>

          <li className="nav-item" style={{marginLeft:'10px'}}>
            {/* <NavLink className="navbar-item" activeClassName="is-active" to="/" style={{color:'white', fontFamily:'sans-serif'}}>
              ESG stocks
            </NavLink> */}
            {/* <a className="nav-link" href="#" style={{color:'white', fontFamily:'sans-serif'}}>
              ESG stocks
            </a> */}
            <Link className="navbar-brand navbarN" to='/esg' state={{id:props.userId}}>ESG Stocks</Link>
          </li>

          {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}

          <li className="nav-item dropdown" style={{marginLeft:'10px',paddingRight:"35px"}}>
              <i className="fa fa-user-circle" style={{fontSize:"30px",paddingRight:"5px",color:"white"}}></i>
              <Link className="navbar-brand navbarN" role="button" data-bs-toggle="dropdown" to='/dashboard' onClick={getUserName}>Profile</Link>
              <ul className="dropdown-menu" style={{textAlign:"center"}}>
                    <li><p className="dropdown-item" style={{color:"plum"}}>Username:{uname}</p></li>
                    <li><p className="dropdown-item" style={{color:"plum"}}>Change Password</p></li>
                    <li><Link to='/' onClick={logoutOnChange} style={{color:"plum"}}>Logout</Link></li>
              </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;