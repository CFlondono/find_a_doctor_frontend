import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navigation">
            <h1>Find a Doctor 🔎</h1>
                <div className="navigation__links-wrapper">
                    <Link to ={"/"}>Home</Link>
                    <Link to ={"/admin"}>Admin</Link>
                        {/* <Link to ={"/login"}>Log in</Link> */}
                        {/* <p>About</p>
                        <p>Admin</p>
                        <p>Log in</p> */}

                </div>
        </nav>
    )
}
export default Navbar