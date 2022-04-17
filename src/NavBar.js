import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

const active = {
    background: "salmon",
    color: "black"
}

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Home
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Login
            </NavLink>

        </div>
    )
}

export default NavBar