import { Link } from "react-router-dom";
import Display from "../components/Display";
import Search from "../components/Search";
import {useState} from "react";

function Home(props){
    const [filteredDoctors,setFilteredDoctors] = useState([])

    const filterDocBySpeciality = (spec) =>{
        const specialtyDoctors = props.doctors.filter((oneDoctor)=>{
        // console.log(oneDoctor)
            const specialtyArray = oneDoctor.specialties ? oneDoctor.specialties : [];
            const lowerCaseSpecialty = specialtyArray.map(specialty => specialty.toLocaleLowerCase())
            if (spec == ""){
                return oneDoctor
            }else if (lowerCaseSpecialty.includes(spec.toLocaleLowerCase())){
                return oneDoctor
            }
        })
        setFilteredDoctors(specialtyDoctors)
    }

    return(
        <div>
            <Search doctors={props.doctors} setFilteredDoctors={setFilteredDoctors}/>
            <section className="container">
                <h1>Top-searched specialties</h1>
                    <div className="container_icons">
                        <button onClick={() => filterDocBySpeciality("family")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/family.png"}/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("general practice")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/general.png"}/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("cardiologist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/cardiologist.png"}/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("internist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/internist.png"}/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("nutritionist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/nutritionist.png"}/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("oncologist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/oncology.png"}/>
                        </button>
                    </div>
            </section>
            <Display filteredDoctors={filteredDoctors}/>
        </div>

    )
}
export default Home