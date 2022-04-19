import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'


const linkStyles = {
    display: "inline",
    width: "100%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#656998",
    textDecoration: "none",
    color: "white",
}

const active = {
    background: "salmon",
    color: "black",
    fontWeight: "bold"

}

function NavBar({isLoggedIn}) {
    return (
        <div className='nav-style'>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Home
            </NavLink>
            <NavLink
                to="/playInAGame"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Play in a Game!
            </NavLink>
            <NavLink
                to="/findPlayer"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Find a Player
            </NavLink>
            <NavLink
                to="/editProfile"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Edit Profile
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </NavLink>


        </div>
    )
}

export default NavBar