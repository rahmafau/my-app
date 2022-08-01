import React, { useEffect, useState } from "react";
import './navbar.css';
// import {Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, NavbarBrand, NavbarText, DropdownMenu, DropdownItem} from 'reactstrap'

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)
   

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
    }, [localStorage.getItem("loggedIn")])

    return(
    <div className="Navbar">
        <a href="/">Home</a>
        { !loggedIn ? (
            <>
            "Hello"
            </>
        ) : (
            <>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
            </>
        )}
    </div>
    )      
}

export default Navbar;