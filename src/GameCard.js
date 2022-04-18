import React, { useState } from 'react'
import "./GameCard.css"
import logo3 from "./3Team.png"
import logo5 from "./5Team.png"


function GameCard({ data }) {
    // console.log(data)
    // console.log(logo3, logo5)
    // const [isThree, setIsThree] = useState(true)
    const { id, name, type, playersNeeded, color, date, court } = data
    const teamTypeStyle = type === "3v3" ? logo3 : logo5
    const bgcolor = color.toLowerCase() 
    let textColor;
    bgcolor === "white"|| bgcolor === "yellow" ? textColor = "black" : textColor = "white"
    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"
    
    return (
        <div style={{background: bgcolor, color: textColor }} className='card-container'>
            <div className='card-title'>
                <h1>
                    Team Name: <br/>{name}
                </h1>
            </div>
            <div className='image-container'>
                <img src={teamTypeStyle} alt="type of game" />
            </div>
            <div className='card-body'>

                <h3>Game Type: {type} </h3>
                {/* Game Type should also be stateful, and card styled differently (ternary) */}
                <h4>{available} </h4>
                {/* Players needed should be stateful, if full we should indicated Game Full in green, if needed players, we should indicate in red! */}
                <p>Team Color: {color} </p>
                <p>Court Number: {court}</p>
                <p>Game Date: {date}</p>
            </div>

            {/* Conditional for a button */}


        </div>
    )
}

export default GameCard