import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="/public/images/logo-black.svg" alt="Neelesh Roy Logo" />
            </div>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/resume">About</NavLink>
                </li>
                <li>
                    <NavLink to="/linkedin">LinkedIn</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Phone</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
