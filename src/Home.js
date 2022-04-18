import React from 'react'
import GameCard from './GameCard'

function Home({data}) {
  console.log(data)

  const renderTeams = data.map(team => <GameCard key={team.id} data={team}/>)
  return (
    <div>
      <h1>Welcome to Put Me In, Coach!</h1>
      <h3>Your #1 Source for last minute substitutions and available pickup games!</h3>
      {renderTeams}
    </div>
  )
}

export default Home