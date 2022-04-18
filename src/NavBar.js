import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    display: "inline",
    width: "100%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

const active = {
    background: "salmon",
    color: "black",
    fontWeight: "bold"

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
                to="/findGame"
                exact
                style={linkStyles}
                activeStyle={active}
            >
                Find a Game
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