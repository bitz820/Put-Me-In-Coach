import React from 'react'
import GameCard from './GameCard'

function Home() {

  // const renderTeams = teams.map(team => <GameCard data={team}/>)
  const renderTeams = <GameCard/>
  return (
    <div>
      <h1>Welcome to Put Me In, Coach!</h1>
      <h3>Your number one source for last minute substitutions and available pickup games!</h3>
      {/* renderTeams */}
      {renderTeams}
    </div>
  )
}

export default Home