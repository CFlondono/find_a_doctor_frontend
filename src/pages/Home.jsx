import { Link } from "react-router-dom"
function Home(){
    return(
        <section className="container">
            <h1>Top-searched specialties</h1>
                <div className="container_icons">
                <img src={process.env.PUBLIC_URL + "/images/specialties/family.png"}/>
                    <img src={process.env.PUBLIC_URL + "/images/specialties/general.png"}/>
                    <img src={process.env.PUBLIC_URL + "/images/specialties/cardiologist.png"}/>
                    <img src={process.env.PUBLIC_URL + "/images/specialties/internist.png"}/>
                    <img src={process.env.PUBLIC_URL + "/images/specialties/nutritionist.png"}/>
                    <img src={process.env.PUBLIC_URL + "/images/specialties/oncology.png"}/>
                </div>
        </section>

    )
}
export default Home