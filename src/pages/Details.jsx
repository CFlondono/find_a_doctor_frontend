import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details  = () => {
        let { id } = useParams()
        const [ doc, setDoc ] = useState(null)
        const URL = process.env.REACT_APP_SERVER_URL+"/doctors/"
        let newUrl = URL + id
        console.log(newUrl)

        useEffect(() =>{
            fetch(newUrl)
            .then((res) => res.json())
            .then((json) => setDoc(json))
            .catch((err) => console.log('Error!', err))
        },[])
        if (!doc) {
            return <p>Loading Doctor's information ...</p>
          }

          return(
        <div className="container">
            < div className = "container_form"> 
                <h1>Doctor {doc.name}  {doc.lastname},  MD :</h1>
                <img src={process.env.PUBLIC_URL + doc.img}
                alt={doc.name+doc.lastname}/>
                <br></br>
                <h2>Specialties:</h2>
                <ul>{doc.specialties.map(specialty => (
                    <li key={doc._id}>
                        {specialty}
                    </li>
                    ))}
                </ul>      
                <br></br>
                <h2>Education:</h2>
                <ul>{doc.education.map(educ => (
                    <li key={doc._id}>
                        {educ}
                    </li>
                    ))}
                </ul>      
                <br></br>
                <h2>Languages:</h2>
                <ul>{doc.languages.map(language => (
                    <li key={doc._id}>
                        {language}
                    </li>
                    ))}
                </ul>    
                <br></br>
                <h2>Address:</h2>
                {doc.city} - {doc.zipcode}




            </div>
        </div>
    )
}
export default Details