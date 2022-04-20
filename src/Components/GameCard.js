import React from 'react'
import styled from "styled-components"
import logo3 from "../Media/3Team.png"
import logo5 from "../Media/5Team.png"
import Button from 'react-bootstrap/Button'

function GameCard({ data, handleAddToTeam }) {
    const { id, name, type, playersNeeded, color, date, court } = data
    const teamTypeStyle = type === "3v3" ? logo3 : logo5
    const bgcolor = color.toLowerCase()
    let textColor;
    bgcolor === "white" || bgcolor === "yellow" ? textColor = "black" : textColor = "white"
    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"

    const StyledCardDiv = styled.div`
    width: 300px;
    margin: 10px;
    overflow: hidden;
    box-shadow: 0px,0px, 20px, -5px;
    transition: .5s;
    animation: ease-in-out;
    border: solid black 2px;
    background: ${bgcolor};
    color: ${textColor};

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


    return (
        <StyledCardDiv bgcolor textColor className={`${name}`}>
            <CardTitle>
                <h1>Team {name}</h1>
            </CardTitle>
            <div className='image-container'>
                <Img src={teamTypeStyle} alt="type of game" />
            </div>
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