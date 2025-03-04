import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="nav-button">HOME</button>
      </Link>
      <Link to="/studentlist">
      <button className="nav-button">STUDENT LIST</button>
      </Link>
      <Link to="/attendance">
      <button className="nav-button">ATTENDANCE</button>
      </Link>
      <Link to="/atrecord">
      <button className="nav-button">ATTENDANCE RECORD</button>
      </Link>
      <Link to="/about">
      <button className="nav-button">ABOUT</button>
      </Link>
    </div>
  )
}
export default Navbar