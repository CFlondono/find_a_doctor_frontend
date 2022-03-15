import React, { useState } from 'react'

const Create = () => {

    const initialState = {name:"", lastname:"" }
    const [createDoc, setCreateDoc] = useState(initialState)

    const handleChange = (e) => {
        setCreateDoc({ ...createDoc, [ e.target.name ]: e.target.value })
        }
    
    const newDoctor = async (data) => {

        const URL = process.env.REACT_APP_SERVER_URL+"/doctors"
        const options = {
            method: "POST",
            body: JSON.stringify(createDoc),
            headers:{
                 "Content-Type" : "application/json"
                }
            }
        try{
            console.log("Data inside newDoctor", data)
            const createdDoctor = await fetch(URL,options)
            const parsedDoctor = await createdDoctor.json()
            console.log(parsedDoctor)

        }catch(err){
            console.log(err)
        }
    }    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Data: ",createDoc)
        newDoctor(createDoc)
        // addDoc(createDoc)
        }
    return (
        <div className='container'>
            < div className = "container_form_admin"> 
                <h2>Add a New Doctor</h2>
                <form onSubmit={ handleSubmit }>
                    <div className='field'>
                    <label htmlFor='name'>Name </label>
                    <input required type='text' name='name' onChange={ handleChange } />
                    </div>
                    <br></br>
                    <div className='field'>
                    <label htmlFor='lastname'>Last Name </label>
                    <input required type='text' name='lastname' onChange={ handleChange } />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="specialty">choose a specialty:</label>
                    <select name="specialty" id="specialty">
                        <option value="Oncologist">Oncologist</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Family medicine">Family medicine</option>
                        <option value="Surgery">Surgery</option>
                        <option value="Dermatology">Dermatology</option>
                    </select>
                    </div>
                    <br></br>
                    <div>
                    <label for="language">choose a specialty:</label>
                    <select name="language" id="language">
                        <option value="Spanish">Spanish</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Surgery">Korean</option>
                        <option value="Dermatology">Mandarin</option>
                    </select>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor='address'>Address </label>
                    <input required type='text' name='address' onChange={ handleChange } />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor='city'>City and State</label>
                    <input required type='text' name='city' onChange={ handleChange } />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor='zipcode'>zipcode </label>
                    <input required type='text' name='zipcode' onChange={ handleChange } />
                    </div>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        </div>
      )
}


export default Create