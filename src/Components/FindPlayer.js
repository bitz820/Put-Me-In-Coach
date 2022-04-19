import "./FindPlayer.css"
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

    return (
        <div className="findPlayer">
            <h1>Find-A-Player</h1>
            <h3>In a Pinch? Fill out the form below and request a last minute substitution!</h3>
            <form className='form-style' onSubmit={handleSubmit}>
                <label>
                    Team Name:
                    <input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Team Name" /><br />
                </label>
                <label>
                    Players Needed:
                    <input onChange={handleChange} type="text" name="playersNeeded" value={formData.playersNeeded} placeholder="# of players Needed" /><br />
                </label>
                <label> Game Type:
                    <br /><select onChange={handleChange} name="type">
                        <option value="3v3">3 V 3</option>
                        <option value="5v5">5 V 5</option>
                    </select>
                </label>
                <label>
                    Team Color:
                    <input onChange={handleChange} type="text" name="color" value={formData.color} placeholder="Team Color" /><br />
                </label>
                <label>
                    Date of Game:
                    <input onChange={handleChange} type="date" name="date" value={formData.date} placeholder="Date of Game" /><br />
                </label>
                <label>
                    Court Number:
                    <input onChange={handleChange} type="text" name="court" value={formData.court} placeholder="Court Number" /><br />
                </label>
                <input type="submit" />
            </form>
        </div >
    )
}

export default FindPlayer