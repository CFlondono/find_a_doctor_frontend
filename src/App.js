import Details from './pages/Details';
import Navbar from './components/Navbar';
import Doctors from './pages/Doctors';
import Create from './pages/Create';
import Admin from './pages/Create';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import React from 'react';

function App() {
  

  return (
  <div className="App">
      <Navbar/>

      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/details/:id" element={ <Details/> } />
          <Route path="/doctors" element={ <Doctors/> } />
          <Route path="/create" element={ <Create/>} />
          <Route path="/admin" element={ <Admin/>}/>

      </Routes> 
  </div>
  )} 

export default App;
