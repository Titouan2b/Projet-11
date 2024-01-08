import React, { useState } from 'react'
import "./header.scss"
import ArgentBankLogo from "./../../assets/img/argentBankLogo.png"
import { Link } from 'react-router-dom'


export default function Header() {
    const [login, setLogin] = useState(true)
    const [logout, setLogout] = useState(false)

    const toggleVisibility = () => {
        setLogout(!login)
        setLogin(!logout)
    }


  return (
    <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img
                className="main-nav-logo-image"
                src={ArgentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
        {login && <Link className="main-nav-item login" to="/sign-in" onClick={toggleVisibility} >
                <i className="fa fa-user-circle"></i>
                <p>Sign In</p>
            </Link>}
            {logout && <Link className='main-nav-item logout' to="/" onClick={toggleVisibility}><p>Logout</p></Link>}
            {logout && <p>{firstName}</p>}
        </div>
    </nav>
  )
}
