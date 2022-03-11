import Search from './components/Search';
import Navbar from './components/Navbar';
import Doctors from './components/Doctors';
import Admin from './pages/Admin';
import Home from './pages/Home';
import {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import staticData from './data';
import React from 'react';
// console.log(staticData)

function App() {
  const [doctors,setDoctors] = useState(staticData)
    
  // create an async fetch
  const handleFetch = async () =>{
    const URL = "http://localhost:9000/doctors"
    fetch(URL).then(resp=>{
      console.log(resp)
      return resp.json()
    })
    .then(data=>{
        console.log(data)
        setDoctors(data)
    })
  }

  // veryfy response

  // setDoctors - with the data from BE

  // something to make the call

  useEffect (()=>{
    console.log('testing use effect')
    handleFetch()
  }, [])


  return (
    <div className="App">
    <Navbar/>
    <Search/>
    <Doctors/>
    <section className="container">
      {doctors.map((doctor,index) => {
        return(
          <div className="card">
            <div className="card-image">
              <img src={process.env.PUBLIC_URL + doctor.photo}
                alt={doctor.name+doctor.lastname}
              />
            </div>
            <div className="card-title">
              <h3>{doctor.name+" "+doctor.lastname+" . MD"}</h3>
              <p>{doctor.city}</p>
                <ul>{doctor.specialities.map(specialitie => (
                    <li>{specialitie}</li>  ))}
                </ul>
                <p>Languages</p>
                <ul>{doctor.languages.map(language => (
                    <li>{language}</li>  ))}
                </ul>
            </div>
          </div>
        )
        } 
      )}
  </section>
  <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/admin" element={ <Admin /> } />
  </Routes>      
  </div>
  )}

export default App;
