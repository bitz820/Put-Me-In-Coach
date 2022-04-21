import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import styled from "styled-components";
import NavBar from './NavBar'
import Home from './Home'
import PlayInAGame from './PlayInAGame'
import FindPlayer from './FindPlayer'
import Login from './Login'
import EditProfile from './EditProfile'

const Div = styled.div`
background-color: #656998;
font-family: 'Montserrat', sans-serif;
color: black;
`

const App = () => {
    const [allTeams, setAllTeams] = useState([])
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const history = useHistory()
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

    const handleAddToTeam = (id, data) => {
        console.log(id, data)
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({
                playersNeeded: data.playersNeeded - 1
            })
        }
        fetch(`http://localhost:3000/teams/${id}`, configObj)
            .then(r => r.json())
            .then(updatedInfo => {
                const updatedArr = allTeams.map(team => team.id !== updatedInfo.id ? team : updatedInfo)
                setAllTeams(updatedArr)
                alert(`You have been added to the ${updatedInfo.name} team!  Redirecting to homepage...`)
                history.push("/")
            })
    }

    const incompleteTeams = allTeams.filter(team => team.playersNeeded > 0)

    return (

        isLoggedIn ?

            <Div className='app-style'>
                <NavBar isLoggedIn={isLoggedIn} />
                <Switch>
                    <Route exact path="/">
                        <Home data={allTeams} />
                    </Route>
                    <Route path="/login" >
                        <Login setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn} />
                    </Route>
                    <Route exact path="/playInAGame">
                        <PlayInAGame incompleteTeams={incompleteTeams} handleAddToTeam={handleAddToTeam} />
                    </Route>
                    <Route exact path="/findPlayer">
                        <FindPlayer findAPlayer={findAPlayer} />
                    </Route>
                    <Route path="/editProfile">
                        <EditProfile />
                    </Route>
                </Switch>
            </Div>

            :

            <Login setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn} />
    )
}

export default App