import { useState } from 'react';
function Create() {
    const [name, setName] = useState([])
    const [lastname, setLastname] = useState([])
    const [specialty, setSpecialty] = useState([])
    const [language, setLanguage] = useState([])
    const [city, setCity] = useState([])
    return(
        <div>
            <h1>New Doctor</h1>
            <form>
                <imput type = "name"/>
                <imput type = "lastname"/>
                <imput type = "speciality"/>
                <imput type = "languages"/>
                <imput type="submit"/>
            </form>
        </div>
    )
}
exports default Create