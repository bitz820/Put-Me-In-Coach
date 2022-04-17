import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import FindGame from './FindGame'
import FindPlayer from './FindPlayer'
import Login from './Login'


function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/findGame">
                    <FindGame />
                </Route>
                <Route exact path="/findPlayer">
                    <FindPlayer />
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
            </Switch>

        </div>
    )
}

export default App