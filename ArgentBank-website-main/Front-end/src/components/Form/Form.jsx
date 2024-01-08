import { useState } from 'react'
import "./form.scss"
// import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { loginUser } from "../../redux/reducers/authSlice"

export default function Form() {
  const [userName, setUserName] = useState("") 
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  async function edit(event, name, password){
    event.preventDefault()
    console.log(name)
    try{
      const loginData = {
        email: name,
        password: password
      }
    const loginDataJson = JSON.stringify(loginData)
    const sendLogin = await fetch("http://localhost:3001/api/v1/user/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: loginDataJson
    })
      
      if(!sendLogin.ok){
        const sendLoginError = await sendLogin.json()
        console.log(sendLoginError.message)
        return
      }
      const sendLoginResponse = await sendLogin.json()
      const token = sendLoginResponse.body.token
      console.log(token)
      dispatch(loginUser({token}))
      navigate("/user")
    }catch(error){
      console.log(error.message)
    }
  }

  const toggleVisibility = ({toggleVisibilityLogin}) => {

  }


  return (
      <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(event) => edit(event, userName, password)}>

            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                >Remember me</label>
            </div>
            <button type='submit' className="sign-in-button" onClick={toggleVisibility}>Sign In</button>
          </form>
        </section>
  )
}