import React, { useState } from 'react'
import MiniCard from './MiniCard'
import "./Home.css"


function Home({ data }) {
  console.log(data)

  const sortByDate = data.sort((a, b) => a.date.localeCompare(b.date))
  const renderTeamsByDate = sortByDate.map(team => <MiniCard key={team.id} data={team} />)

  const sortByType = data.sort((a, b) => a.type.localeCompare(b.type))
  const render3Teams = sortByType.filter(team => team.type === "3v3").map(team => <MiniCard key={team.id} data={team} />)
  const render5Teams = sortByType.filter(team => team.type === "5v5").map(team => <MiniCard key={team.id} data={team} />)
  const [sortState, setSortState] = useState("a");

  let showSort;

if (sortState === "a") {
    showSort = renderTeamsByDate
  } else if (sortState === "b") {
    showSort = render3Teams
  } else if (sortState === "c") {
    showSort = render5Teams
  }

  return (
    <div className='home-style' id='Homecontainer'>
      <div className='headerText'>
        <h1>Welcome to Put Me In, Coach!</h1>
        <h3>Your #1 Source for last minute substitutions and available pickup games!</h3>
        <p>Feel free to take a look around.  Our aim is to help you find the perfect match for your pickup game.  Whether you are a team captain or Coach looking for a sub, a player looking to join a game last minute, or a spectator just here for the show we trust that this app will help you find just what you're looking for! </p>
      </div>
      <div className="ddApp" >
        <h1>Upcoming Games</h1>
        <select className="custom-select" onChange={(e) => setSortState(e.target.value)} >
          <option value='a'>Sort by Date</option>
          <option value='b'>3 v 3 Games</option>
          <option value='c'>5 v 5 Games</option>
        </select>
      </div>

        <div className='home-card-style ' id='Home2'>
          {showSort}
        </div>
    </div>
  )
}

export default Home