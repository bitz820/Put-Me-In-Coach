import styled from "styled-components"
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"


function FindPlayer({ findAPlayer }) {
    const history = useHistory()

    const [formData, setFormData] = useState({
        name: "",
        playersNeeded: "",
        type: "",
        color: "",
        date: 12 / 31 / 2022,
        court: ""
    })

    const handleChange = (e) => {
        console.log(formData)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = formData.date
        const [year, month, day] = input.split('-')
        const formatDate = `${month}/${day}/${year}`
        const request = {
            name: formData.name,
            playersNeeded: parseInt(formData.playersNeeded),
            type: formData.type,
            color: formData.color,
            date: formatDate,
            // date: formData.date,
            court: parseInt(formData.court)
        }
        console.log(request)
        findAPlayer(request)
        alert("Player Request has been added! Redirecting to Homepage...")
        history.push("/")
        // Persist the data and redirect user to the home page
    }

    const Div = styled.div`
        text-align: center;
    min-width: 100%;
    height: 100%;
    margin: 0vw;
    padding: 5vw ;
    position:relative; 
    background-color: #656998 ;
    `

    const Label = styled.label`
    color: white;
    display: block;
    text-align: center;
    font-size: 20px;
    margin: 0 0 2vh 0;
    `

    const Input = styled.input`
    display: block;
    background: rgb(245, 244, 245);
    width: 80%;
    align-items: center;
    padding: .5rem .8rem .5rem .8rem;
    margin: .9vw 0 ;
    border:0;
    border-radius: 5px;
    font-size: 20px;

    `

    return (
        <Div className="findPlayer">
            <h1>Find-A-Player</h1>
            <h3>In a Pinch? Fill out the form below and request a last minute substitution!</h3>
            <img src="https://media0.giphy.com/media/gHpiRuBWFYMoiTCt71/giphy.gif?cid=ecf05e47tyxs5pacck3v58mvk2dv1y506za1uqudxgyzlkqn&rid=giphy.gif&ct=s" alt="basketball gif" width="150" height="200"></img>
            <form className='form-style' onSubmit={handleSubmit}>
                <Label>
                    Team Name:
                    <Input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Team Name" /><br />
                </Label>
                <Label>
                    Players Needed:
                    <Input onChange={handleChange} type="text" name="playersNeeded" value={formData.playersNeeded} placeholder="# of players Needed" /><br />
                </Label>
                <Label> Game Type:
                    <br /><select onChange={handleChange} name="type">
                        <option value="3v3">3 V 3</option>
                        <option value="5v5">5 V 5</option>
                    </select>
                </Label>
                <Label>
                    Team Color:
                    <Input onChange={handleChange} type="text" name="color" value={formData.color} placeholder="Team Color" /><br />
                </Label>
                <Label>
                    Date of Game:
                    <Input onChange={handleChange} type="date" name="date" value={formData.date} placeholder="Date of Game" /><br />
                </Label>
                <Label>
                    Court Number:
                    <Input onChange={handleChange} type="text" name="court" value={formData.court} placeholder="Court Number" /><br />
                </Label>
                <Input type="submit" />
            </form>
            
        </Div >
    )
}

export default FindPlayer