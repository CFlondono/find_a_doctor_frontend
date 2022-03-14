import { Link } from "react-router-dom"

function Display(props){
return(
  <section className="container">
  {props.filteredDoctors.map((doctor,idx) => {
    return(
      <div className="card">
        <Link to={`/details/${ doctor._id }`} key={ idx }>
        <div className="card-image">
          <img src={process.env.PUBLIC_URL + doctor.img}
            alt={doctor.name+doctor.lastname}
          />
        </div>
        </Link>
        <div className="card-title">
          <h3>{doctor.name+" "+doctor.lastname+" . MD"}</h3>
          <p>{doctor.city}</p>
            <ul>{doctor.specialties.map(specialty => (
                  <li key={doctor._id}>
                    {specialty}
                  </li>  
                ))}
            </ul>
            <p>Languages</p>
            <ul>{doctor.languages.map(language => (
                  <li key={doctor._id}>
                    {language}
                   </li>  
                ))}
            </ul>
        </div>
       </div>
    )
    } 
  )}
</section>
)
}
export default Display