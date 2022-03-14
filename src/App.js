import Search from './components/Search';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Doctors from './pages/Doctors';
import Create from './pages/Create';
import Admin from './pages/Create';
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
  const [newDoctor, setNewDoctor] = useState({})
  
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
  const addDoctor = (newDoctor) => setDoctors(setDoctors([ ...doctors, newDoctor ]))

  return (
  <div className="App">
      <Navbar/>

      <Routes>
          <Route path="/" element={ <Home doctors={doctors}/> } />
          <Route path="/details/:id" element={ <Details/> } />
          <Route path="/doctors" element={ <Doctors  doctors={doctors}/> } />
          <Route path="/create" element={ <Create addDoctor={addDoctor}/>} />
          <Route path="/admin" element={ <Admin/>}/>

      </Routes> 
  </div>
  )} 

export default App;
