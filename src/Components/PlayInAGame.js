import React, { useState } from "react";
import GameCard from './GameCard';
import styled from "styled-components"

const DivContainer = styled.div`
text-align: center;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`
const SearchInput = styled.div`
    display: 'block';
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    background-color: salmon;
    border: solid black 6px;
    text-align: center;
    font-size: 25px;
`

const PlayInAGame = ({ incompleteTeams, handleAddToTeam }) => {

  const [searchedTeam, setSearchedTeam] = useState([""])

  const searchResults = incompleteTeams.filter((teams) => teams.name.toLowerCase().includes(searchedTeam))
  const renderTeamsNeedingPlayers = searchResults.map(item => <GameCard handleAddToTeam={handleAddToTeam} key={item.id} data={item} />)


  return (
    <>
        <SearchInput  className="searchInputs">
          <h1>Search for a Team you'd like to join!</h1>
          <input 
          onChange={e => setSearchedTeam(e.target.value)} 
          type="text" 
          placeholder={"Search Team Name..."}
           />
        </SearchInput>
      <DivContainer className='play-game-card-style'>
        {renderTeamsNeedingPlayers}
      </DivContainer>
    </>
  )
}

export default PlayInAGame