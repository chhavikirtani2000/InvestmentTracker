import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Header from './Header';

export default function Login(props) {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [liststate, setListState] = useState({users:[]});
  const [isShown, setIsShown] = useState(false);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    // 👇️ navigate to /contacts
    navigate('/dashboard');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      getUsers();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  function getUsers() {
    axios.get("http://localhost:8080/api/")
        .then((res)=>{
          setListState({
            users:res.data
          })
        })
    }
  const onSubmitHandler = () => {
    if (uname === "") { alert("User Name cannot be empty"); }
    else {
      if (password === "") {
        alert("Password cannot be empty");
      }
      else {
        const exisitingContact = {
          uname: uname,
          password: password
        }
        console.log(exisitingContact);
        let idx='';
        for(let i=0;i<liststate.users.length;i++)
        {
          if(liststate.users[i].uname==uname && liststate.users[i].password==password)
          {
              idx=liststate.users[i].id;
              break;
          }
        }
        console.log(idx);
        if(idx=='')
        { alert("User Name or Password are incorrect"); }
        else
        {
          //props.func(idx);
          setUserId(idx);
          //setIsShown(current => !current);
          navigate('/dashboard', {state:{id:idx}});
        }
      }
    }
  }
  return (
    <div>
      {/* {isShown && <Dashboard id={userId} />} */}
      <Header/>
      
      <div className="divL_class" style={{paddingTop:"30px", marginLeft:'30px'}}>
        <h1 className="hL_class"> Welcome Back!</h1>
        <p className="pL_class">If you already have an account, just sign in. We've missed you!</p>
      </div>
      <div className="container conL_class" style={{width:'100vh'}}>
        <div className="card divL_class div1L_class" style={{width:'100vh'}}>
          <div className="card-header" style={{width:'100vh'}}>
            <ul className="nav nav-tabs card-header-tabs justify-content-center" style={{marginRight:'50px'}}>
              <li className="nav-item navL_class">
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
              <li className="nav-item navL_class">
                <Link className="nav-link linkL" to="/signup">SignUp</Link>
              </li>
            </ul>
          </div>
          <div className="card-body" style={{width:'100vh'}}>
            <div className="container" style={{width:'100vh'}}>
              <div className="row" style={{paddingTop:"30px", width:'100vh'}}>
                <div className="col" style={{marginRight:'80px'}}>
                  <div className="form-group loginL_field" style={{paddingBottom:"30px",paddingTop:"20px"}}>
                    <i className="loginL__icon fas fa-user"></i>
                    <input type="text" className="loginL__input" placeholder="User name" onChange={(e) => setUname(e.target.value)}></input>
                  </div>
                  <div className="form-group loginL__field" style={{paddingBottom:"30px"}}>
                    <i className="loginL__icon fas fa-lock"></i>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="loginL__input"></input>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Link className="linkL" to="/forgotpassword">Forgot Password?</Link>
                  </div>
                  <div className="form-group">
                    <button data-testid="btnSubmit" onClick={onSubmitHandler} className="btn btn-secondary buttonL logL">Login</button>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BrowserRouter>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter> */}
    </div>
  )
}
