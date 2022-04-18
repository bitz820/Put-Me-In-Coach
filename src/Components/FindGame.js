import React, {useState} from "react";
import GameCard from './GameCard';
import "./GameCard.css"

function FindGame({ incompleteTeams }) {

  const [searchedTeam, setSearchedTeam] = useState([""])

  const handleChange = (e) => {
      setSearchedTeam(e.target.value)
      
  }
  const searchResults = incompleteTeams.filter((teams) =>{
    return teams.name.toLowerCase().includes(searchedTeam)
    // return teams.name.toLowerCase().includes(searchedTeam.toLowerCase())
  })

  const renderTeamsNeedingPlayers = searchResults.map(item => <GameCard key={item.id} data={item} />)

  return (
    <>
    <div className="search">
            <div className="searchInputs">
            <input onChange={handleChange} type="text" placeholder={"Search Team Name..."}/>
            </div>
            
        </div>
        <div className="FindGame">
      <div className='search-results'>
        {renderTeamsNeedingPlayers}
      </div>
    </div>
    </>
    

  )
}

export default FindGame