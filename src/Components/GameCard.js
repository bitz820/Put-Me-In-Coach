import React from 'react'
import "./GameCard.css"
import logo3 from "../Media/3Team.png"
import logo5 from "../Media/5Team.png"
import Button from 'react-bootstrap/Button'

function GameCard({ data, handleAddToTeam }) {
    const { id, name, type, playersNeeded, color, date, court } = data
    const teamTypeStyle = type === "3v3" ? logo3 : logo5
    const bgcolor = color.toLowerCase()
    let textColor;
    bgcolor === "white" || bgcolor === "yellow" ? textColor = "black" : textColor = "white"
    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"

    return (
        <div style={{ background: bgcolor, color: textColor }} className={`card-container ${name}`}>
            {/* {console.log(history)} */}
            <div className='card-title'>
                <h1>Team {name}</h1>
            </div>
            <div className='image-container'>
                <img src={teamTypeStyle} alt="type of game" />
            </div>
            <div className='card-body'>
                <h3>Game Type: {type} </h3>
                <h4>{available} </h4>
                <p>Team Color: {color} </p>
                <p>Court Number: {court}</p>
                <p>Game Date: {date}</p>
                {playersNeeded > 0 ? <Button variant="secondary" size="sm" outline={true} onClick={() => handleAddToTeam(id, data)}>Add Me To This Team!</Button> : null}
            </div>
        </div>
    )
}

export default GameCard