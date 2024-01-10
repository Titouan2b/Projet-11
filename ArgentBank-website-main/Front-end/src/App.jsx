import { useSelector } from 'react-redux'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/home';
import User from './pages/User/User';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const token = useSelector((state) => state.auth.token)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/user" element={token ? <User/> : <Navigate to="/sign-in"/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App
