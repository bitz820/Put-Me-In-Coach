import React, {useState} from 'react'

function FindPlayer() {

    const [formData, setFormData] = useState({
        name: "",
        players: 0,
        color: "",
        date: 12/31/2022,
        court: ""
    })

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefaul()

    const request = {
        name: formData.name,
        players: formData.players,
        color: formData.color,
        date: formData.date,
        court: formData.court
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(request)
    }
    // fetch("", configObj)
    // .then(r => r.json())
    // .then(data => {
// console.log(data)
// setAllTeams([...allTeams, request])
    // })
// Persist the data and redirect user to the home page
}

    return (
        <div>
            <h1>Find-A-Player</h1>
            <h3>In a Pinch? Fill out the form below and request a last minute substitution!</h3>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Team Name" /><br/>
            <input onChange={handleChange} type="text" name="players" value={formData.players} placeholder="# of Players Needed" /><br/>
            <input onChange={handleChange} type="text" name="color" value={formData.color} placeholder="Team Color" /><br/>
            <input onChange={handleChange} type="date" name="date" value={formData.date} placeholder="Date of Game" /><br/>
            <input onChange={handleChange} type="text" name="court" value={formData.court} placeholder="Court Number" /><br/>
            <input type="submit"  />
            </form>
        </div>
    )
}

export default FindPlayer