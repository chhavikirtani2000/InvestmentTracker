import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg" id="navbar-example2">
                <div className="container-fluid headerH">
                    <Link className="navbar-brand" to='/'>
                        <img className="myimgH" src='images/natwest_logo1.png' alt='Natwest Group'>
                        </img>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-light" type="submit"><i className="fa fa-search" style={{ size: '540px' }}>
                        </i></button> */}
                    </form>
                </div>
            </nav>
        </div>
    )
}
