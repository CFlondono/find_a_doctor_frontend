import {useEffect, useState} from 'react';


function Search(props){ 
    // console.log("Search"+results)
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()
        const filteredDocByName = props.doctors.filter((oneDoctor)=>{
            console.log(oneDoctor)
            if (searchTerm == ""){
              return oneDoctor
            }else if (oneDoctor.lastname.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
              return oneDoctor
            }
        })
        const filteredDocBySpeciality = props.doctors.filter((oneDoctor)=>{
            // console.log(oneDoctor)
            const specialtyArray = oneDoctor.specialties ? oneDoctor.specialties : [];
            const lowerCaseSpecialty = specialtyArray.map(specialty => specialty.toLocaleLowerCase())
            if (searchTerm == ""){
              return oneDoctor
            }else if (lowerCaseSpecialty.includes(searchTerm.toLocaleLowerCase())){
              return oneDoctor
            }
        })
        const filteredDocByLanguage = props.doctors.filter((oneDoctor)=>{
            console.log(oneDoctor)
            const languageArray = oneDoctor.languages ? oneDoctor.languages : [];
            const lowerCaseLanguage = languageArray.map(language => language.toLocaleLowerCase())
            if (searchTerm == ""){
              return oneDoctor
            }else if (lowerCaseLanguage.includes(searchTerm.toLocaleLowerCase())){
              return oneDoctor
            }
        })
//filter by zipcode
        const filteredDocByZipcode = props.doctors.filter((oneDoctor)=>{
            const searchZip = String(oneDoctor.zipcode)
            if (searchTerm == ""){
              return oneDoctor
            }else if (searchZip.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
              return oneDoctor
            }
        })
        //   console.log("This is the result:"+filteredDocByName)
        // filter props.doctors based on the searchterm
        if (filteredDocByName.length > 0){
            props.setFilteredDoctors(filteredDocByName)
            // console.log("This is e.target"+e.target)
        }else if (filteredDocBySpeciality.length > 0){
            props.setFilteredDoctors(filteredDocBySpeciality)
            // console.log("This is e.target"+e.target)
        }else if (filteredDocByLanguage.length > 0){
            props.setFilteredDoctors(filteredDocByLanguage)
            console.log("This is e.target"+e.target)
        }else if (filteredDocByZipcode.length > 0){
          props.setFilteredDoctors(filteredDocByZipcode)
          console.log("This is e.target"+e.target)
      }
    }
    const handleChange = (e) =>{
        setSearchTerm(e.target.value)
    }
    return(
        
        <header className="header">
            <h1 className="header__title">Find the Doctor you need</h1>
            <form className="header__form" onSubmit={handleSubmit} >
                <input className="form__input-text" name="name" placeholder="Find a Doctor" onChange={handleChange}/>
                <button type="submit" >Search</button>
            </form>
            {/* <div className='results-container'>
            {currentResults()}
        </div> */}
        </header>
    )}
        // {<h1>Find your Doctor</h1>}
export default Search