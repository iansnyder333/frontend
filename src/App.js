import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from "./components/Modal";
import axios from "axios";
import ProjectsList from './components/ProjectList';

import NavBarBasic from './components/NavBarBasic';

import Home from './components/Home';
import ToDoList from './components/ToDoList'
function App() {


    

  
    return (
      
      <Router>
      <main className="container">
        <NavBarBasic />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Home />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/todos" element={<ToDoList />} />
        </Routes>
      </main>
    </Router>
    );
  
}

export default App;