import styles from './Login.module.css'
import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

// neshto kato map
const LoginFormKeys ={
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const {onLoginSubmit} = useAuthContext()
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);
    
    return(
        <section className={styles.auth} id="loginPage">
            <form className={styles.form} id='login' method='POST' onSubmit={onSubmit} > 
                <div className="login-container">
                <h1 >Login</h1>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">

                    <label className="form-label" htmlFor="email" >Email address</label>
                    <input type="email" id="email" className="form-control" name={LoginFormKeys.Email} placeholder="softuni@gamil.com" value={values[LoginFormKeys.Email]} onChange={changeHandler} required/>
                    
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    
                    <label className="form-label" htmlFor="form2Example2" >Password</label>
                    <input type="password" id="form2Example2" className="form-control" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} required/>
                    
                </div>
                <input type="submit" className="btn btn-primary btn-block mb-4 submit" value="Login" />
                <p>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
    </section>
    );
};
