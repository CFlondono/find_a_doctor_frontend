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
import data from './data';
import DoctorInfo from './components/DoctorInfo';
import { Link } from "react-router-dom"
// console.log(staticData)

function App() {
  const [doctors,setDoctors] = useState(staticData || [])
  const [filteredDoctors,setFilteredDoctors] = useState([])
  
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
      <Search doctors={doctors} setFilteredDoctors={setFilteredDoctors}/>

      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/details" element={ <DoctorInfo  doctors={doctors}/> } />
          <Route path="/doctors" element={ <Doctors  doctors={doctors}/> } />

          <Route path="/admin" element={ <Admin /> } />
      </Routes>  
      <section className="container">
        {filteredDoctors.map((doctor,index) => {
          return(
            <div className="card">
              <div className="card-image">
                <img src={process.env.PUBLIC_URL + doctor.img}
                  alt={doctor.name+doctor.lastname}
                />
              </div>
              {/* <Link to={`/details/${ doctor.id}`} key={ doctor.id }> */}
              <div className="card-title">
                <h3>{doctor.name+" "+doctor.lastname+" . MD"}</h3>
                <p>{doctor.city}</p>
                  <ul>{doctor.specialties.map(specialty => (
                      <li>{specialty}</li>  ))}
                  </ul>
                  <p>Languages</p>
                  <ul>{doctor.languages.map(language => (
                      <li>{language}</li>  ))}
                  </ul>
              </div>
              {/* </Link> */}
            </div>
          )
          } 
        )}
      </section>
  </div>
  )} 

export default App;
