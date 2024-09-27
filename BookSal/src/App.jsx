import React, { useState } from "react";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from "./components/SideBar";


const  App = () =>{
  const[sidebarToggle, setSideBarToggle] = useState(false)
  return (
    <Router>
      <Header sidebarToggle={sidebarToggle}
      setSideBarToggle={setSideBarToggle}/>
      <Sidebar sidebarToggle = {sidebarToggle}
        setSideBarToggle={setSideBarToggle}/>

      
      <Routes> 
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/register" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
