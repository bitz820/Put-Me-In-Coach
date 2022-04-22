import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const linkStyles = {
    display: "inline",
    width: "100%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    border: "salmon 6px solid",
    textDecoration: "none",
    color: "salmon",
}

const active = {
    background: "salmon",
    color: "white",
    fontWeight: "bold",
    border: "white 6px solid"
}

const NavStyle = styled.div`
    padding: 10px;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-around;
`


const NavBar = ({isLoggedIn}) => {
    return (
        <NavStyle className='nav-style'>
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
        </NavStyle>
    )
}

export default NavBar