import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import "./App.css"
import NavBar from './NavBar'
import Home from './Home'
import FindGame from './FindGame'
import FindPlayer from './FindPlayer'
import Login from './Login'



function App() {
    const [allTeams, setAllTeams] = useState([])
    // const [filterTeams, setFilterTeams] = useState(allTeams)

    useEffect(() => {
        fetch("http://localhost:3000/teams")
            .then(r => r.json())
            .then(teams => setAllTeams(teams))
    }, [setAllTeams])

    const findAPlayer = (request) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(request)
        }
        fetch("http://localhost:3000/teams", configObj)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setAllTeams([...allTeams, request])
            })
    }

    const incompleteTeams = allTeams.filter(team =>  team.playersNeeded > 0)

    console.log(incompleteTeams)


    return (
        <div className='app-style'>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home data={allTeams} />
                </Route>
                <Route exact path="/findGame">
                    <FindGame incompleteTeams={incompleteTeams}/>
                </Route>
                <Route exact path="/findPlayer">
                    <FindPlayer findAPlayer={findAPlayer} />
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
            </Switch>

        </div>
    )
}

export default App