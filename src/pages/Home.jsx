import Display from "../components/Display";
import Search from "../components/Search";
import {useState, useEffect} from "react";

function Home(){
    const [filteredDoctors,setFilteredDoctors] = useState([])
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


    const filterDocBySpeciality = (spec) =>{
        const specialtyDoctors = doctors.filter((oneDoctor)=>{
        // console.log(oneDoctor)
            const specialtyArray = oneDoctor.specialties ? oneDoctor.specialties : [];
            const lowerCaseSpecialty = specialtyArray.map(specialty => specialty.toLocaleLowerCase())
            if (spec === ""){
                return oneDoctor
            }else if (lowerCaseSpecialty.includes(spec.toLocaleLowerCase())){
                return oneDoctor
            }else{
                return
            }
            return false
        })
        setFilteredDoctors(specialtyDoctors)
    }

    return(
        <div>
            <Search doctors={doctors} setFilteredDoctors={setFilteredDoctors}/>
            <section className="container">
                <h1>Top-searched specialties</h1>
                    <div className="container_icons">
                        <button onClick={() => filterDocBySpeciality("family")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/family.png"} alt="Family Practice" className="responsive"/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("general practice")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/general.png"} alt="General Practice" className="responsive"/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("cardiologist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/cardiologist.png"} alt="Cardiologist" className="responsive"/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("internist")} >
                            <img src={process.env.PUBLIC_URL + "/images/specialties/internist.png"}  alt="Internist" className="responsive"/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("nutritionist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/nutritionist.png"}  alt="nutritionist" className="responsive"/>
                        </button>
                        <button onClick={() => filterDocBySpeciality("oncologist")}>
                            <img src={process.env.PUBLIC_URL + "/images/specialties/oncology.png"}  alt="oncology" className="responsive"/>
                        </button>
                    </div>
            </section>
            <Display filteredDoctors={filteredDoctors}/>
        </div>

    )
}
export default Home