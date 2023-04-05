import styles from './Header.module.css'
import {Clock} from "../ClockAndWeather/ClockAndWeather"
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {

  const {isAuthenticated, userEmail} = useContext(AuthContext)

  return(
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className={styles.headerPage}> 
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <!-- Guest users and Logged users --> */}
                        
                        <li className={styles.catalogue}>
                        <Link className="nav-link" to="/catalogue">Catalogue</Link>
                        </li>

                        {/* <!-- Logged users --> */}
                        {isAuthenticated && (
                            <div className={styles.isAuthenticated}>
                                <span className={styles.userEmail}>{userEmail}</span>

                                <li className={styles.offerSeat}>
                                <Link className="nav-link" to="/offer-seat">Offer seat</Link>
                                </li>
                                
                                <li className={styles.logout}>
                                <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                                
                            </div>
                        )} 
                        
                        {/* <!-- Guest users --> */}
                        {!isAuthenticated &&(
                            <div className={styles.isNotAuthenticated}>
                                <li className={styles.login} >
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className={styles.register} >
                                <Link className="nav-link" to="/register">Register</Link>
                                </li> 
                            </div>
                        )}
                        
                    </ul> 
                </div>
            </div>
            <div className={styles.clock}>
                    <Clock/>
            </div>
        </nav> 
    </header> 
  );
};