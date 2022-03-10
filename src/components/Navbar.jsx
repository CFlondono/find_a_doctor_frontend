// import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navigation">
            <h1>Find a Doctor 🔎</h1>
                <div className="navigation__links-wrapper">
                    {/* <Link to ={"/"}>Home</Link>
                        <Link to ={"/matches"}>About</Link>
                        <Link to ={"/competitions"}>Log in</Link> */}
                        <p>Home</p>
                        <p>About</p>
                        <p>Log in</p>
                        <p>    . </p>

                </div>
        </nav>
    )
}
export default Navbar