import React from 'react'

function GameCard() {
  return (
    <card>
        <h1>Team Name</h1>
        <h3>Game Type </h3>
        {/* Game Type should also be stateful, and card styled differently (ternary) */}
        <h4>Number of Players needed: </h4>
        {/* Players needed should be stateful, if full we should indicated Game Full in green, if needed players, we should indicate in red! */}
        <p>Team Color: </p>
        <p>Court Number:</p>
        <p>Game Time</p>
    </card>
  )
}

export default GameCard