import React from 'react';
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";


const Header = () => {

const history = useHistory();

  const Logout = () =>{
    localStorage.clear();
    history.push("/login");
  }

    
        return (
            <div>
                <header className="bg-primary">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand" to="/">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                   {
                                    localStorage.getItem("user-info") ?
                                    <>
                                     <li activeclassName="nav-item active">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <span onClick={()=>Logout()} >Logout</span>
                                        </Link>
                                    </li>
                                    </>
                                    :
                                    <>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/signin">Sign up</Link>
                                    </li>
                                    </>
                                   }

                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    
}

export default Header;