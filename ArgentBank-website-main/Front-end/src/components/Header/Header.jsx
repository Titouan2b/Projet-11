import React from 'react'
import "./header.scss"
import ArgentBankLogo from "./../../assets/img/argentBankLogo.png"
import { Link } from 'react-router-dom'


export default function Header() {
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
            <Link className="main-nav-item login" to="/sign-in">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
            <Link className='main-nav-item logout' to="/">Logout</Link>
        </div>
    </nav>
  )
}
