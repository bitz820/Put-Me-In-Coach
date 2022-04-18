import React from 'react';
import SearchBar from "./SearchBar";
import GameCard from './GameCard';
import "./GameCard.css"

function FindGame({ incompleteTeams }) {

  const renderTeamsNeedingPlayers = incompleteTeams.map(item => <GameCard key={item.id} data={item} />)

  return (
    <div className="FindGame">
      <SearchBar placeholder="Search Team Name..." />
      <div className='search-results'>
        {renderTeamsNeedingPlayers}
        console.log("hi!")
      </div>
    </div>

  )
}

export default FindGame