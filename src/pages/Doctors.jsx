import React from "react"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
function Doctor() {
    const [doctors,setDoctors] = useState ([])

    const handleFetch = (query) =>{
        const URL = process.env.REACT_APP_SERVER_URL+"/doctors"
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
    const allDoctors = doctors.map((doctor) => {
            return(
                <div className="card" key={doctor._id}>
                        <Link to={`/details/${ doctor._id }`} >
                          <div className="card-image">
                            <img src={process.env.PUBLIC_URL + doctor.img}
                            alt={doctor.name+doctor.lastname}className="responsive"/>
                           </div> 
                        </Link>    
                    <div className="card-title">
                        <h3>{doctor.name+" "+doctor.lastname+" . MD"}</h3>
                        <p>{doctor.city}</p>
                        <ul>{doctor.specialties.map((specialty, index) => {
                               return <li key={index}>
                                    {specialty}
                                </li>  
                            })}
                        </ul>
                        <p>Languages</p>
                        <ul>{doctor.languages.map((language, index) => {
                               return <li key={index}>
                                    {language}
                                </li>  
                        })}
                        </ul>
                    </div>
                </div>
            )
    })
    return(
        <section className='container'>
        {allDoctors}
       </section>
    )
}
export default Doctor
