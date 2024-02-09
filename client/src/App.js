import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home.jsx';
import UserLogin from './components/Pages/UserLogin/UserLogin.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<UserLogin />}/>
      </Routes>
    </Router>
  );
}

export default App;
