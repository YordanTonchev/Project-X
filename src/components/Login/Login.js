import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import { Link } from "react-router-dom";

// neshto kato map
const LoginFormKeys ={
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext)
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);
    return(
        <section className="py-5" id="login-page">
            <form method='POST' onSubmit={onSubmit} style={{width:'30%'}}> 
                <div className="login-container">
                <h1>Login</h1>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">

                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" id="email" className="form-control" name={LoginFormKeys.Email} placeholder="softuni@gamil.com" value={values[LoginFormKeys.Email]} onChange={changeHandler} />
                    
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" id="form2Example2" className="form-control" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} />
                    
                </div>
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Login" />
                <p>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
    </section>
    );
};
