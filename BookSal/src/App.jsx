import React, { useState } from "react";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App(){
  return (
    <Router>
        <header className="bg-[#347723]"> 
            <nav className="flex flex-col justify-between items-center p-20">
              <ul className="flex gap-20">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/">Register</Link></li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        <Auth/>   
    </Router>
  );
};

export default App;
