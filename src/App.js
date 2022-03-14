import Search from './components/Search';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Doctors from './pages/Doctors';
import Admin from './pages/Admin';
import Home from './pages/Home';
import {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import staticData from './data';
import React from 'react';
import Display from './components/Display';
// import data from './data';
// import { Link } from "react-router-dom"
// console.log(staticData)

function App() {
  const [doctors,setDoctors] = useState(staticData || [])
  
  // Display the filtered Doctos in App.js instead of doctors
  // Pass Doctors and setFilteredDoctors to the Search component 
    
  // create an async fetch
  const handleFetch = (query) =>{
    const URL = "http://localhost:9000/doctors"
    fetch(URL).then(resp=>{
      // console.log(resp)
      return resp.json()
    })
    .then(data=>{
        // console.log(data)
        setDoctors(data)
    })
  }
  useEffect (()=>{
    // console.log('testing use effect')
    handleFetch()
  }, []);
  return (
  <div className="App">
      <Navbar/>

      <Routes>
          <Route path="/" element={ <Home doctors={doctors}/> } />
          <Route path="/details/:id" element={ <Details/> } />
          <Route path="/doctors" element={ <Doctors  doctors={doctors}/> } />
          {/* <Route path="/admin" element={ <Admin doctors={doctors}/>} /> */}
      </Routes>  
  </div>
     
  )} 

export default App;
