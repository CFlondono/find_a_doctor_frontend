import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navigation">
            <h1>Find a Doctor 🔎</h1>
                <div className="navigation__links-wrapper">
                    <Link to ={"/"}>Home</Link>
                    <Link to ={"/admin"}>Admin</Link>
                        {/* <Link to ={"/login"}>Log in</Link> */}
                        {/* <p>About</p>*/}
                    <Link to ={"/alldoctors"}>Doctors</Link>
    
                

                </div>
        </nav>
    )
}
export default Navbar