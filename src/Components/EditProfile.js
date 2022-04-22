import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'
import styled from "styled-components"


const Label = styled.label`
font-size: 30px;
`

const Input = styled.input`
    display: block;
    background: rgb(245, 244, 245);
    width: 100%;
    text-align: center;
    align-items: center;
    padding: .5rem .8rem .5rem .8rem;
    margin: .9vw 0 ;
    border:0;
    border-radius: 5px;
    font-size: 20px;
`

const HeaderDiv = styled.div`
    display: 'block';
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    background-color: salmon;
    border: solid black 6px;
    text-align: center;
    font-size: 25px;
    margin-bottom: 50px;
`

const EditProfile = () => {

  const [userInfo, setUserInfo] = useState({
    firstName: "Mark",
    lastName: "Bacon",
    userName: "bitz820",
    email: "mark.n.bacon.jr@gmail.com",
    number: "8632556245"
  })

  const [isDataChanged, setDataChanged] = useState(false)

  const onUserDataChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
    console.log(userInfo)
    setDataChanged(true)
  }

  const saveChanges = (e) => {
    setDataChanged(false)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <Prompt when={isDataChanged} message={() => "You have unsaved changes! Are you sure you want to leave?"} />
      <HeaderDiv>Welcome to Edit Profile...</HeaderDiv>
      <p>
        <Label>First Name : <Input type="text" name="firstName"
          onChange={(e) => onUserDataChange(e)}
          value={userInfo.firstName} /></Label>
      </p>
      <p>
        <Label>Last Name : <Input type="text" name="lastName"
          onChange={onUserDataChange} 
          value={userInfo.lastName} /></Label>
      </p>
      <p>
        <Label>User Name : <Input type="text" name="userName"
          onChange={onUserDataChange}
          value={userInfo.userName} /></Label>
      </p>
      <p>
        <Label>Email : <Input type="text" name="email"
          onChange={onUserDataChange}
          value={userInfo.email} /></Label>
      </p>
      <p>
        <Label>Contact Number : <Input type="text" name="number"
          onChange={onUserDataChange}
          value={userInfo.number} /></Label>
      </p>
      <button onClick={saveChanges}>Save</button>
    </div>
  )
}

export default EditProfile