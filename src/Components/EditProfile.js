import React, {useState} from 'react'
import {Prompt} from 'react-router-dom'
import styled from "styled-components"

function EditProfile() {
  
const [userInfo, setUserInfo] = useState({
    firstName: "Mark",
    lastName: "Bacon",
    userName: "bitz820",
    email: "mark.n.bacon.jr@gmail.com",
    number: "8632556245"
})

const [isDataChanged, setDataChanged] = useState(false)

const onUserDataChange = (e) => {
    setUserInfo({...userInfo, 
        [e.target.name]: e.target.value
    })
    console.log(userInfo)
    setDataChanged(true)
}

const saveChanges = (e) => {
    setDataChanged(false)
    setUserInfo({...userInfo, 
        [e.target.name]: e.target.value
    })
}

const Div = styled.div`
text-align: center;
`

const Input = styled.input`
    display: block;
    background: rgb(245, 244, 245);
    width: 80%;
    align-items: center;
    padding: .5rem .8rem .5rem .8rem;
    margin: .9vw 0 ;
    border:0;
    border-radius: 5px;
    font-size: 20px;
`

  return (
    <Div>
        <Prompt when={isDataChanged} message={() => "You have unsaved changes! Are you sure you want to leave?"} />
    <h2>Welcome to Edit Profile...</h2>
    <p>
      <label>First Name : <Input type="text" name="firstName" 
      onChange={(e) => onUserDataChange(e)}
       value={userInfo.firstName}/></label>
    </p>
    <p>
      <label>Last Name : <Input type="text" name="lastName" 
      onChange={onUserDataChange} value={userInfo.lastName}/></label>
    </p>
    <p>
      <label>User Name : <Input type="text" name="userName" 
      onChange={onUserDataChange}
       value={userInfo.userName}/></label>
    </p>
    <p>
      <label>Email : <Input type="text" name="email" 
      onChange={onUserDataChange}
       value={userInfo.email}/></label>
    </p>
    <p>
      <label>Contact Number : <Input type="text" name="number" 
      onChange={onUserDataChange}
       value={userInfo.number}/></label>
    </p>
    <button onClick={saveChanges}>Save</button>
  </Div>
  )
}

export default EditProfile