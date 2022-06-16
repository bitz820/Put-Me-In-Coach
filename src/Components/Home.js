import React, { useState } from 'react'
import MiniCard from './MiniCard'
import styled from "styled-components"
import image from "../Media/image.png"


const ContainerDiv = styled.div`
    text-align: center;
    background-color: black;
    width:85%;
    margin: 0 auto;
`

const CardStyleDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #40456c;
`

const HeaderDiv = styled.div`
    display: 'block';
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    background-color: salmon;
    border: solid black 6px;
    text-align: center;
    font-size: 25px;
`

const H3 = styled.h2`
background-color: white;
`

const SortDiv = styled.div`
    color: white;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
`

const Select = styled.select`
font-size: 30px;
margin: 30px;
background-color: salmon;
color: black;
border: white 6px solid;
`

const Home = ({ data }) => {
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
    <ContainerDiv>
      <HeaderDiv>
        <h1>Welcome to Put Me In, Coach!</h1>
        <H3>Your #1 Source for last minute substitutions and available pickup games!</H3>
        <h4>Feel free to take a look around.  Our aim is to help you find the perfect match for your pickup game.  Whether you are a team captain or Coach looking for a sub, a player looking to join a game last minute, or a spectator just here for the show we trust that this app will help you find just what you're looking for! </h4>
      </HeaderDiv>
      <SortDiv>
        <h1>Upcoming Games</h1>
        <Select className="custom-select" onChange={(e) => setSortState(e.target.value)} >
          <option value='a'>Sort by Date</option>
          <option value='b'>3 v 3 Games</option>
          <option value='c'>5 v 5 Games</option>
        </Select>
      </SortDiv>

        <CardStyleDiv className='home-card-style ' id='Home2'>
          {showSort}
        </CardStyleDiv>
    </ContainerDiv>
  )
}

export default Home