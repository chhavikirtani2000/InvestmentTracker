import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
        <div className="divPNF_class">
        <img src='images/PNF.jpg' alt='Natwest Group' className='myimgPNF'></img>
      <p className="pPNF_class">We're sorry,the page youy requested could not be found</p>
      <p className="pPNF_class"> Please go back to the homepage</p>
      <Link to="/">
      <button type="button" className="btn btn-light">Home</button>
      </Link>
      </div>
    </div>
  )
}
