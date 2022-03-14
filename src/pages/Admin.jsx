// function Admin(props){

// // Manage my data within Admin   
// // create a new hook for doctorInput
// // create a handler for capturing user input
// // on submit handler
// // make a fetch call to POST
//     const initialInput ={
//         "name": "",
//         "lastname": "",
//         "specialties": [],
//         "languages": [],
//         "education": [],
//         "city": "",
//         "zipcode": 0,        

//     }
//     const [doctorInput, setDoctorInput] = useState({initialInput})

//     const handleChange = (e) =>{
//         console.log(e.target.name)
//         const newObject = {...doctorInput,[e.target.name]:e.target.value}
//         console.log(newObject)
//     }
//     return(
//         <div className="container"> 
//                 <form className="container_form">
//                     <h1>Add a Doctor:</h1>
//                     <p>Name: </p> <input 
//                                     name="name" 
//                                     type="text" 
//                                     placeholder="name here" 
//                                     value={doctorInput.name}
//                                     onChange={handleChange} />

//                     <p>Last Name: </p> <input name="img" placeholder="last name here"/>
//                     <br></br>
//                     <button type="submit" >create</button>
//                 </form>
//         </div>       
//     )
// }
// export default Admin