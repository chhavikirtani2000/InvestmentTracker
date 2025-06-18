import React from 'react'
import "./Login.css";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import axios from 'axios';
import Header from './Header';

export default function Signup() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = () => {
    if (fname === "") { alert("First Name cannot be empty"); }
    else {
      if (lname === "") { alert("Last Name cannot be empty"); }
      else {
        if (email === "") { alert("Email cannot be empty"); }
        else {
          if (validator.isEmail(email)) {
            if (password === "" || confirmPassword === "") {
              alert("Password cannot be empty");
            }
            else {
              if (password === confirmPassword) {
                if (validator.isStrongPassword(password, {
                  minLength: 8, minLowercase: 1,
                  minUppercase: 1, minNumbers: 1, minSymbols: 1
                })) {
                  axios.post("http://localhost:8080/api/", {
                    id: uuidv4(),
                    fname: fname,
                    lname: lname,
                    uname: uname,
                    email: email,
                    password: password,
                  }).then(() => {
                  })
                  const newContact = {
                    id: uuidv4(),
                    fname: fname,
                    lname: lname,
                    uname: uname,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                  }
                  alert("Your account has been created successfully!");
                  console.log(newContact);
                  navigate("/login");
                }
                else {
                  alert("Use a Strong Password");
                }
              }
              else {
                if (password !== confirmPassword) {
                  alert("Password mismatch");
                }
              }
            }
          }
          else {
            alert('Enter valid Email!');
          }
        }
      }
    }
  }
  return (
    <div style={{width:'100%'}}>
      <Header/>
      <div className="divL_class" style={{ paddingTop: "30px", width:'100vh', marginLeft:'270px'}}>
        <h1 className="hL_class">Let's Get Started!</h1>
        <p className="pL_class">Enter your details and start your journey with us</p>
      </div>
      <div className="container conL_class" style={{width:'100vh'}}>
        <div className="card divL_class div1L_class" style={{width:'100vh'}}>
          <div className="card-header" style={{width:'100vh'}}>
            <ul className="nav nav-tabs card-header-tabs justify-content-center" style={{marginRight:'60px'}}>
              <li className="nav-item navL_class">
                <Link className="nav-link linkL" to="/login">Login</Link>
              </li>
              <li className="nav-item navL_class">
                <Link className="nav-link active " to="/signup">SignUp</Link>
              </li>
            </ul>
          </div>
          <div className="card-body" style={{width:'100vh'}}>
            <div className="container" style={{width:'100vh'}}>
              <div className="row" style={{width:'100vh'}}>
                <div className="col" style={{width:'100vh', marginLeft:'40px'}}>
                  <div className="formL-field" style={{ paddingBottom: "20px" }}>
                    <div className="form-group loginL_field">
                      <i className="loginL__icon fa fa-user"></i>
                      <input type="text" className="loginL__input" placeholder="First name" onChange={(e) => setFname(e.target.value)}></input>
                    </div>
                    <div className="form-group loginL_field">
                      <i className="loginL__icon fas fa-user"></i>
                      <input type="text" className="loginL__input" placeholder="Last name" onChange={(e) => setLname(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="formL-field" style={{ paddingBottom: "20px" }}>
                    <div className="form-group loginL__field">
                      <i className="loginL__icon fas fa-user"></i>
                      <input type="text" className="loginL__input" placeholder="Create an User Name" onChange={(e) => setUname(e.target.value)}></input>
                    </div>
                    <div className="form-group loginL__field">
                      <i className="loginL__icon fas fa-envelope"></i>
                      <input type="email" className="loginL__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="formL-field" style={{ paddingBottom: "30px" }}>
                    <div className="form-group loginL__field">
                      <i className="loginL__icon fas fa-lock"></i>
                      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="loginL__input"></input>
                    </div>
                    <div className="form-group loginL__field">
                      <i className="loginL__icon fas fa-lock"></i>
                      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="loginL__input"></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <button data-testid="btnSubmit" onClick={onSubmitHandler} className="btn btn-secondary buttonL logL" style={{marginRight:'180px'}}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
