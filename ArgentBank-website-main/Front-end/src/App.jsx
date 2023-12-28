import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/home';
import User from './pages/User/User';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App
