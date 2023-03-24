import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {

  const {isAuthenticated, userEmail} = useContext(AuthContext)

  return(
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid"> 
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display: "flex"}}>
                        {/* <!-- Guest users and Logged users --> */}
                        
                        <li className="nav-item" style={{backgroundColor:"yellow", borderRadius:'20px', color:'pink'}}>
                        <Link className="nav-link" to="/catalogue">Catalogue</Link>
                        </li>

                        {/* <!-- Logged users --> */}
                        {isAuthenticated &&(
                            <div style={{display: "flex", backgroundColor:'pink', alignItems:"center"}}>
                                <span>{userEmail}</span>
                                <li className="nav-item" style={{borderRadius:'20px'}}>
                                <Link className="nav-link" to="/offer-seat">Offer seat</Link>
                                </li>
                                
                                <li className="nav-item" style={{borderRadius:'20px'}}>
                                <Link className="nav-link" to="/catalogue">Logout</Link>
                                </li>
                                
                            </div>
                        )} 
                        
                        {/* <!-- Guest users --> */}
                        {!isAuthenticated &&(
                            <div style={{display: "flex", marginLeft:"20px"}}>
                                <li className="nav-item" style={{border:'2px solid black',borderRadius:'20px', backgroundColor:'green', marginRight:"20px"}}>
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item" style={{borderRadius:'20px'}}>
                                <Link className="nav-link" to="/register">Register</Link>
                                </li> 
                            </div>
                        )}
                        
                    </ul> 
                </div>
            </div>
        </nav> 
    </header> 
  );
};