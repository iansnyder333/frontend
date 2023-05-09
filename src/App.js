import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectsList from './components/ProjectList';

import NavBarBasic from './components/NavBarBasic';

import Home from './components/Home';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
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
        <Footer />
      </main>
    </Router>
    );
  
}

export default App;