import React from 'react'
import styled from "styled-components"
import logo3 from "../Media/3Team.png"
import logo5 from "../Media/5Team.png"
import Button from 'react-bootstrap/Button'


const StyledCardDiv = styled.div`
width: 300px;
margin: 10px;
overflow: hidden;
box-shadow: 0px,0px, 20px, -5px;
transition: .5s;
animation: ease-in-out;
border: solid black 2px;
background-color: ${props => props.color};
color: ${props => props.color === "White" || props.color === "Yellow" ? "black" : "white"};


:hover {
transform: scale(1.1);
box-shadow: 0px,0px, 20px, 0px;
}
`

const Img = styled.img`
overflow: hidden;
height: auto;
width: auto;
margin-left: 10px;
`

const CardTitle = styled.div`
    margin-bottom: 0.5rem;
`

const CardBody = styled.div`   
margin: 1rem;
margin-top: 0.5rem;
`

const PStyle = styled.p`
margin: 0;
padding: 3px;
`


const GameCard = ({ data, handleAddToTeam }) => {
    const { id, name, type, playersNeeded, color, date, court } = data
    const teamTypeStyle = type === "3v3" ? logo3 : logo5

    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"

    return (
        <StyledCardDiv color={color} className={`${name}`}>
            <CardTitle>
                <h1>Team {name}</h1>
            </CardTitle>
            <Img src={teamTypeStyle} alt="type of game" />
            <CardBody>
                <PStyle as="h3">Game Type: {type} </PStyle>
                <PStyle as="h4">{available} </PStyle>
                <PStyle>Team Color: {color} </PStyle>
                <PStyle>Court Number: {court}</PStyle>
                <PStyle>Game Date: {date}</PStyle>
                {playersNeeded > 0 ? <Button variant="secondary" size="sm" outline={true} onClick={() => handleAddToTeam(id, data)}>Add Me To This Team!</Button> : null}
            </CardBody>
        </StyledCardDiv>
    )
}

export default GameCard