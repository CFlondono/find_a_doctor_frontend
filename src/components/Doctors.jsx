import {useState, useEffect } from 'react';
// import staticData from './data.js';

function Doctor(props){
    const allDoctors = props.doctors.map((doctor) => {
            return(
                <div className="card" >
                    <div className="card-image">
                    <img src={process.env.PUBLIC_URL + doctor.photo}
                        alt={doctor.name+doctor.lastname}/>
                    </div>
                    <div className="card-title">
                    <h3>{doctor.name+" "+doctor.lastname+" . MD"}</h3>
                    <p>{doctor.city}</p>
                        <ul>{doctor.specialities.map(specialitie => (
                            <li>{specialitie}</li>  ))}
                        </ul>
                        <p>Languages</p>
                        <ul>{doctor.languages.map(language => (
                            <li>{language}</li>))}
                        </ul>
                    </div>
                </div>)
    })
    return(
        <section className='container'>
        {allDoctors}
       </section>
    )
}
export default Doctor
