import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav className="flex">
        <div className="left ">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>Nest Quest</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right ">
        {user ? ( <div className="user">
          <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
          <span>John Doe</span>
          <Link to='/profile' className="profile">
          <div className="notification">3</div>
          <span>Profile</span>
          </Link>
        </div> 
        ) : ( 
        <>
        <a href="/">Sign In</a>
        <a href="/" className="register">
          Sign Up
          </a>
          </> )}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;