import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Login.css"

const Login = () => {

  // const [errorMessages, setErrorMessages] = useState({})
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({
    user: "",
    pass: ""
  })

  const history = useHistory()
  console.log(history)

  // const database = [
  //   {
  //     username: "Mark",
  //     password: "Mrssalzlein1992!"
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
  }

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
      {isLoggedIn ? history.push("/")
        :
        FormField}
    </div>
  )

}

export default Login