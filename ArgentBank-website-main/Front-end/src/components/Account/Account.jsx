import React, { useState } from 'react'
import "./account.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addUserData, editUserName } from '../../redux/reducers/userSlice'


export default function Account() {
  const [newUserName, setNewUserName] = useState('')
  const token = useSelector((state) => state.auth.token)
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')


  useEffect(() => {
    const getUserData = async() => {
      try{
        const userDataResponse = await fetch("http://localhost:3001/api/v1/user/profile",{
          method: "POST",
          headers: {
            "Authorization" : `Bearer ${token}`
          },
        })
        const userDataJSON = await userDataResponse.json()
        dispatch(addUserData(userDataJSON.body))
      }catch(errorUserData){
        console.log(errorUserData.message)
      }
    }
    getUserData()
  },[token])


  async function edit(event, newUserName){
    event.preventDefault()
    const newUserNameJSON = JSON.stringify({userName:newUserName})
    try{
      const sendNewUserName = await fetch("http://localhost:3001/api/v1/user/profile",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        },
        body: newUserNameJSON
      })
      console.log(sendNewUserName)
      dispatch(editUserName(newUserName))
    }catch(error){
      console.log(error.message)
    }
  }

  const applyNewUserName = () => {
    setUserName(newUserName)
    setNewUserName('')
  }


  return (
    <div>
      <div className="header">
        <h1>Welcome back<br />{userName || 'Tony Jarvis !'}</h1>
        
        <div className='column'>
          <form onSubmit={(event) => edit(event, newUserName)}>
          <button className="edit-button" onClick={applyNewUserName} type='submit'>Edit Name</button>
            <label htmlFor="username">Username</label>
            <input type="text" id='userName' value={newUserName} onChange={(e) => setNewUserName(e.target.value) } />
            <label htmlFor="firstname">First name</label>
            <input type="text" id='firstName' readOnly={true} value={userData.firstName}/>
            <label htmlFor="lastname" >Last name</label>
            <input type="text" id='lastName' readOnly={true} value={userData.lastName} />
          </form>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  )
}
