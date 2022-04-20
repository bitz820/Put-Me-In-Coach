import React, { useState } from "react";
import GameCard from './GameCard';
import styled from "styled-components"
import './PlayInAGame.css'


function PlayInAGame({ incompleteTeams, handleAddToTeam }) {

  const [searchedTeam, setSearchedTeam] = useState([""])

  const searchResults = incompleteTeams.filter((teams) => teams.name.toLowerCase().includes(searchedTeam))

  const renderTeamsNeedingPlayers = searchResults.map(item => <GameCard handleAddToTeam={handleAddToTeam} key={item.id} data={item} />)

  const DivContainer = styled.div`
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

  `

  return (
    <>
        <div  className="searchInputs">
          <input 
          onChange={e => setSearchedTeam(e.target.value)} 
          type="text" 
          placeholder={"Search Team Name..."}
           />
        </div>
      <DivContainer className='play-game-card-style'>
        {renderTeamsNeedingPlayers}
      </DivContainer>
    </>
  )
}

export default PlayInAGame