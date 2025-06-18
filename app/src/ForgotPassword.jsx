import React from 'react'
import "./Login.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import validator from 'validator';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmpassword1, setConfirmPassword1] = useState('');
    const [confirmpassword2, setConfirmPassword2] = useState('');
    const onSubmitHandler = () => {
        if (password === "") { alert("Old Password cannot be empty"); }
        else {
            if (confirmpassword1 === "") { alert("New Password cannot be empty"); }
            else {
                if (confirmpassword2 === "") { alert("Confirm New Password cannot be empty"); }
                else {
                    if (password === confirmpassword1) {
                        alert("The new password you entered is same as your old password.Enter a different password")
                    }
                    else {
                        if (confirmpassword1 === confirmpassword2) {
                            if (validator.isStrongPassword(confirmpassword1, {
                                minLength: 8, minLowercase: 1,
                                minUppercase: 1, minNumbers: 1, minSymbols: 1
                            })) {
                                alert("Password updated");
                                navigate("/login");
                                console.log(confirmpassword1);
                            }
                            else {
                                alert("Use a Strong Password");
                            }
                        }
                        else {
                            alert("Password mismatch");
                        }
                    }
                }
            }
        }
    }
    return (
        <div>
            <div className="container conL_class">
                <div className="card divL_class div1L_class">
                    <div className="card-header">
                        <h2 className="hL_class">Forgot Password</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-group loginL__field" style={{ paddingBottom: "30px", paddingTop: "20px" }}>
                            <i className="loginL__icon fas fa-lock"></i>
                            <input type="password" placeholder="Old Password" onChange={(e) => setPassword(e.target.value)} className="loginL__input"></input>
                        </div>
                        <div className="form-group loginL__field" style={{ paddingBottom: "30px" }}>
                            <i className="loginL__icon fas fa-lock"></i>
                            <input type="password" placeholder="New Password" onChange={(e) => setConfirmPassword1(e.target.value)} className="loginL__input"></input>
                        </div>
                        <div className="form-group loginL__field" style={{ paddingBottom: "30px" }}>
                            <i className="loginL__icon fas fa-lock"></i>
                            <input type="password" placeholder="Confirm New Password" onChange={(e) => setConfirmPassword2(e.target.value)} className="loginL__input"></input>
                        </div>
                        <div className="form-group" style={{ paddingTop: "20px" }} >
                            <button data-testid="btnSubmit" onClick={onSubmitHandler} className="btn btn-secondary buttonL logL">Reset Password</button>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                            <Link className="linkL" to="/login">Go back to Login Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
