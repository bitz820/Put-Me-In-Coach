import React, {useState} from 'react'
import {Prompt} from 'react-router-dom'
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


  return (
    <div>
        <Prompt when={isDataChanged} message={() => "You have unsaved changes! Are you sure you want to leave?"} />
    <h2>Welcome to Edit Profile...</h2>
    <p>
      <label>First Name : <input type="text" name="firstName" 
      onChange={(e) => onUserDataChange(e)}
       value={userInfo.firstName}></input></label>
    </p>
    <p>
      <label>Last Name : <input type="text" name="lastName" 
      onChange={onUserDataChange} value={userInfo.lastName}></input></label>
    </p>
    <p>
      <label>User Name : <input type="text" name="userName" 
      onChange={onUserDataChange}
       value={userInfo.userName}></input></label>
    </p>
    <p>
      <label>Email : <input type="text" name="email" 
      onChange={onUserDataChange}
       value={userInfo.email}></input></label>
    </p>
    <p>
      <label>Contact Number : <input type="text" name="number" 
      onChange={onUserDataChange}
       value={userInfo.number}></input></label>
    </p>
    <button onClick={saveChanges}>Save</button>
  </div>
  )
}

export default EditProfile