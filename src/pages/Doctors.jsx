import { Link } from "react-router-dom"

function Doctor(props) {
    const allDoctors = props.doctors.map((doctor) => {
            return(
                <div className="card">
                        <Link to={`/details/${ doctor._id }`} >
                          <div className="card-image">
                            <img src={process.env.PUBLIC_URL + doctor.img}
                            alt={doctor.name+doctor.lastname}class="responsive"/>
                           </div> 
                        </Link>    
                    <div className="card-title">
                        <h3>{doctor.name+" "+doctor.lastname+" . MD"}</h3>
                        <p>{doctor.city}</p>
                        <ul>{doctor.specialties.map((specialty, index) => {
                                <li key={index}>
                                    {specialty}
                                </li>  
                            })}
                        </ul>
                        <p>Languages</p>
                        <ul>{doctor.languages.map((language, index) => {
                                <li key={index}>
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
