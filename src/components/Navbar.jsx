import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navigation">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt = "logo"/>
            {/* <h1>Find a Doctor 🔎</h1> */}
                <div className="navigation__links-wrapper">
                    <Link to ={"/"}>Home</Link>
                    <Link to ={"/admin"}>Admin</Link>
                        {/* <Link to ={"/login"}>Log in</Link> */}
                        {/* <p>About</p>*/}
                    <Link to ={"/doctors"}>Doctors</Link>
    
                

                </div>
        </nav>
    )
}
export default Navbar