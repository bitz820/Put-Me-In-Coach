import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"

const Title = styled.div`
    font-size: 60px;
    text-align: center;
    padding: 20px;
    background: #656998;
`
const LoginDiv = styled.div`
    color: rgb(250, 252, 247);
    background-color: #656998;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

const Login = ({ setisLoggedIn, isLoggedIn }) => {

  // const [errorMessages, setErrorMessages] = useState({})
  const [loginData, setLoginData] = useState({
    user: "",
    pass: ""
  })

  const history = useHistory()

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

  const userIsLoggedIn = (
    <div>
      <p>You are already Logged In! Click Below to Log Out!</p>
      <button onClick={() => setisLoggedIn(false)}>Log Out</button>
    </div>
  )



  const FormField = (
    <Form onSubmit={onLogin}>
      <label>Username</label>
      <input onChange={handleChange} type="text" name="user" required />
      <label>Password</label>
      <input onChange={handleChange} type="password" name='pass' required />
      <input type="submit" />
    </Form>
  )


  return (
    <LoginDiv className="login-form">
      <Title>{isLoggedIn ? "Sign Out!" : "Sign In!"}</Title>
      {isLoggedIn ? userIsLoggedIn : FormField}
      <img src="https://media3.giphy.com/media/d7ToT8jj75iFQtNTQS/giphy.gif?cid=ecf05e47buzjd7kie703bu5lbpc9mi7dj0cp7v91nl1k8gt8&rid=giphy.gif&ct=s" alt="basketball gif" ></img>
    </LoginDiv>
  )
}

export default Login