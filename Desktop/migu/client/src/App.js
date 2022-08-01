import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/navbar'
import Register from './pages/register';
import Login from './pages/login';
import Upload from './pages/upload';
import EmailVerify from './pages/verification';
import Profile from './pages/profile'
import InfoCard from './components/InfoCard';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Register/>} path="/register" />
      <Route element={<Login/>} path="/login" />
      <Route element={<Upload/>} path="/upload" />
      <Route element={<EmailVerify/>} path="/authentication/:token" />
      <Route element={<Profile/>} path="/profile" />
      <Route element={<InfoCard/>} path="/InfoCard" />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
