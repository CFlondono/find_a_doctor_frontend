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
            < div className = "container_form"> 
                <h2>Add a New Doctor</h2>
                <form onSubmit={ handleSubmit }>
                    <label htmlFor='name'>Name</label>
                    <input required type='text' name='name' onChange={ handleChange } />
                    <label htmlFor='lastname'>Last Name</label>
                    <input required type='text' name='lastname' onChange={ handleChange } />
                    <button>Submit</button>
                </form>
            </div>
        </div>
      )
}


export default Create