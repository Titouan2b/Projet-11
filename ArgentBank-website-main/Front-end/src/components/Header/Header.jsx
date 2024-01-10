import React, { useState } from 'react'
import "./header.scss"
import ArgentBankLogo from "./../../assets/img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../../redux/reducers/userSlice'


export default function Header() {
    const [login, setLogin] = useState(true)
    const [logout, setLogout] = useState(false)
    const token = useSelector((state) => state.auth.token)
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch()

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
        <div className='nav-right'>
            {token ? (
                <>
                    <Link className="main-nav-item" to="/user" >
                        <p className='main-nav-item'>{userData.firstName}</p>
                    </Link>
                    <Link className='main-nav-item' to="/" onClick={() => {
                        dispatch(logout())
                        dispatch(deleteData())
                    }}><p>Logout</p></Link>
                </>
            ) : (
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </Link>
            )}
        </div>
    </nav>
  )
}
