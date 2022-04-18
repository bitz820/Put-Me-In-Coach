import React, { useState } from 'react'


function FindPlayer() {

    const [formData, setFormData] = useState({
        name: "",
        players: "",
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
        // const input = formData.date
        // const [year, month, day] = input.split('-')
        // const formatDate = `${month}-${day}-${year}`
        const request = {
            name: formData.name,
            players: parseInt(formData.players),
            type: formData.type,
            color: formData.color,
            // date: formatDate,
            date: formData.date,
            court: formData.court
        }
        console.log(request)

        // const configObj = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //     },
        //     body: JSON.stringify(request)
        // }
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
                <input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Team Name" /><br />
                <input onChange={handleChange} type="text" name="players" value={formData.players} placeholder="# of Players Needed" /><br />
                <span>
                    <label>Game Type <br />
                        <select onChange={handleChange} name="type">
                            <option name="type" value="3v3">3 V 3</option>
                            <option name="type" value="5v5">5 V 5</option>
                        </select>   
                        </label>
                </span><br />
            <input onChange={handleChange} type="text" name="color" value={formData.color} placeholder="Team Color" /><br />
            <input onChange={handleChange} type="date" name="date" value={formData.date} placeholder="Date of Game" /><br />
            <input onChange={handleChange} type="text" name="court" value={formData.court} placeholder="Court Number" /><br />
            <input type="submit" />
        </form>
        </div >
    )
}

export default FindPlayer