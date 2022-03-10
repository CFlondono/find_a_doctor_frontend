import Search from './components/Search';
import Navbar from './components/Navbar';
import Doctors from './components/Doctors';

import {useState} from 'react';
import './App.css';
import staticData from './data';
import React from 'react';
// console.log(staticData)

function App() {
  const [doctors,setDoctors] = useState(staticData)
  console.log(doctors)
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
              <h3>{doctor.name+doctor.lastname}</h3>
            </div>
          </div>
        )
        } 
      )}
  </section>


    </div>
  )}

export default App;
