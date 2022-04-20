import React, { useState } from 'react'
import logo3 from "../Media/3Team.png"
import logo5 from "../Media/5Team.png"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'

function MiniCard({ data }) {
    const { name, type, playersNeeded, color, date, court } = data
    const teamTypeStyle = type === "3v3" ? logo3 : logo5
    const bgcolor = color.toLowerCase()
    let textColor;
    (bgcolor === "white" || bgcolor === "yellow") ? textColor = "black" : textColor = "white"
    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div style={{ background: bgcolor, color: textColor }} className={`card-container ${name}`}>
            <div className='card-title'>
                <h1>Team: {name}</h1>
            </div>
            <div className='image-container'>
                <img src={teamTypeStyle} alt="type of game" />
            </div>
            {/* This will eventually be a redirect to a route for the card clicked on, viewing full details of that team! */}
            <div className='miniCard-body'>
                <p>Game Date: {date}</p>
                <Button variant="outline-dark" size="sm" onClick={toggleDetails}>See More Info</Button>
                
                   {showDetails ? (<div>
                    <h3>Game Type: {type} </h3>
                    <h4>{available} </h4>
                    <p>Team Color: {color} </p>
                    <p>Court Number: {court}</p>
                </div>)
                    :
                    null}
                     
            </div>
        </div>
    )
}

export default MiniCard