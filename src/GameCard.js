import React from 'react'


function GameCard({data}) {
    console.log(data)
    const {id, name, type, playersNeeded, color, date, court} = data
  return (
    <card>
        <h1>Team Name: {name}</h1>
        <h3>Game Type: {type} </h3>
        {/* Game Type should also be stateful, and card styled differently (ternary) */}
        <h4>Number of Players needed: {playersNeeded} </h4>
        {/* Players needed should be stateful, if full we should indicated Game Full in green, if needed players, we should indicate in red! */}
        <p>Team Color: {color} </p>
        <p>Court Number: {court}</p>
        <p>Game Date: {date}</p>
    </card>
  )
}

export default GameCard