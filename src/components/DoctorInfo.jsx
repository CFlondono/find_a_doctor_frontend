function DoctorInfo (props){
    return(
       <div className="container">
           <img src={process.env.PUBLIC_URL + props.doctor.img}
                alt={props.doctor.lastname}/>
            <h3>Name:</h3><h4>{props.doctor.name+" "+props.doctor.lastname+" . MD"}</h4> 
            {/* <h3>City: </h3><h4>{props.doctor.city}</h4>
            <h3>Specialties:</h3>
                <h4>
                <ul>{doctor.specialties.map(specialty => (
                <li>{specialty}</li>  ))}
                </ul>
                </h4>
            <h3>Languages:</h3>
                <h4>
                <ul>{doctor.languages.map(language => (
                <li>{language}</li>))}
                </ul>
                </h4>
            <h3>Education:</h3>
                <h4>
                <ul>{doctor.education.map(education => (
                <li>{education}</li>))}
                </ul>
                </h4>
            <h3>Address:</h3><h4>doctor.address</h4>
            <h3>City:</h3><h4>doctor.address</h4>
            <h3>zipcode:</h3><h4>doctor.address</h4> */}
        </div>
    )
}
export default DoctorInfo