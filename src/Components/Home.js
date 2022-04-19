import React from 'react'
// import GameCard from './GameCard'
import MiniCard from './MiniCard'
import "./Home.css"

function Home({ data }) {
  console.log(data)

  const sortByDate = data.sort((a, b) => a.date.localeCompare(b.date))
  const renderTeamsByDate = sortByDate.map(team => <MiniCard key={team.id} data={team} />)

  const sortByType = data.sort((a, b) => a.type.localeCompare(b.type))
  const render3Teams = sortByType.filter(team => team.type === "3v3").map(team => <MiniCard key={team.id} data={team} />)
  const render5Teams = sortByType.filter(team => team.type === "5v5").map(team => <MiniCard key={team.id} data={team} />)


  return (
    <div className='home-style' id='Homecontainer'>
      <div className='headerText'>
      <h1>Welcome to Put Me In, Coach!</h1>
      <h3>Your #1 Source for last minute substitutions and available pickup games!</h3>
      <p>Feel free to take a look around.  Our aim is to help you find the perfect match for your pickup game.  Whether you are a team captain or Coach looking for a sub, a player looking to join a game last minute, or a spectator just here for the show we trust that this app will help you find just what you're looking for! </p>

        </div>
      
      <div className='games-by-date'  >
        <h1>Games by Date</h1>
        <div className='home-card-style ' id='Home2'>
          {renderTeamsByDate}
        </div>
      </div>
      <div className='games-by-type' >
        <h1>Games by Type</h1>
        <h2>3 V 3 Games</h2>
        <div className='3v3-games home-card-style'id='Home3'>
          {render3Teams}
        </div>
        <h2>5 v 5 Games</h2>
        <div className='5v5-games home-card-style'id='Home4'>
          {render5Teams}
        </div>
      </div>
    </div>
  )
}

export default Home