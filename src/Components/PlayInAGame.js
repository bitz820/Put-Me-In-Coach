import React, { useState } from "react";
import GameCard from './GameCard';
import "./PlayInAGame.css"

function PlayInAGame({ incompleteTeams, handleAddToTeam }) {

  const [searchedTeam, setSearchedTeam] = useState([""])

  const searchResults = incompleteTeams.filter((teams) => teams.name.toLowerCase().includes(searchedTeam))

  const renderTeamsNeedingPlayers = searchResults.map(item => <GameCard handleAddToTeam={handleAddToTeam} key={item.id} data={item} />)

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input onChange={e => setSearchedTeam(e.target.value)} type="text" placeholder={"Search Team Name..."} />
        </div>
      </div>
      <div className="game-card-style">
        <div className='play-game-card-style'>
          {renderTeamsNeedingPlayers}
        </div>
      </div>
    </>


  )
}

export default PlayInAGame