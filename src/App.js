import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home'
import Resume from './components/resume';
import About from './components/about';
import Projects from './components/projects';
import Services from './components/services';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/resume" element={<Resume />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
