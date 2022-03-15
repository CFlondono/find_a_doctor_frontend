import { Link } from "react-router-dom"

function Admin (){
    return(
    <div className="container">
        <Link to={"/create"}>
         <h1>Add a new doctor</h1>
         </Link>
    </div>
    )
}
export default Admin