import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import "./Login.css"

const Login = ({setisLoggedIn, isLoggedIn}) => {

  // const [errorMessages, setErrorMessages] = useState({})
  const [loginData, setLoginData] = useState({
    user: "",
    pass: ""
  })

  const history = useHistory()
  console.log(history)

  // const database = [
  //   {
  //     username: "Mark",
  //     password: "Mrszlein12!"
  //   },
  //   {
  //     username: "Tosie",
  //     password: "password2"
  //   }
  // ];

  // const errors = {
  //   uname: "Invalid Username",
  //   pass: "Invalid Password"
  // }

  // const renderErrorMessage = (name) => {
  //   name === errorMessages.name && (
  //     <div className='error'>{errorMessages.message}</div>
  //   )
  // }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const onLogin = (e) => {
    e.preventDefault()
    setisLoggedIn(true)
    history.push("/")
  }

  const userIsLoggedIn = 
(<div>
        <p>You are already Logged In! Click Below to Log Out!</p>
        <button onClick={() => setisLoggedIn(false)}>Log Out</button>
      </div> )
  
  

  const FormField = (
    <div>
      <form onSubmit={onLogin}>
        <label>Username</label>
        <input onChange={handleChange} type="text" name="user" required />
        <label>Password</label>
        <input onChange={handleChange} type="password" name='pass' required />
        <input type="submit" />
      </form>
    </div>
  )


  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      {isLoggedIn ? userIsLoggedIn : FormField}

      <img src="https://media3.giphy.com/media/d7ToT8jj75iFQtNTQS/giphy.gif?cid=ecf05e47buzjd7kie703bu5lbpc9mi7dj0cp7v91nl1k8gt8&rid=giphy.gif&ct=s" alt="basketball gif" ></img>
    </div>
  )

}

export default Login