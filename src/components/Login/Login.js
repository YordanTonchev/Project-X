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
    const styles = {
        backgroundImage: 'url("https://johnlewis.scene7.com/is/image/JohnLewis/recaro-bg-carseats-desk-161122")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        border: '2px black solid'
    };
    return(
        <section className="auth" id="login-page" style={styles}>
            <form id='login' method='POST' onSubmit={onSubmit} style={{width:'18%', marginLeft:'300px', border:'2px pink solid', borderRadius:"10px", padding:"10px"}}> 
                <div className="login-container">
                <h1 style={{color:'grey', textAlign:'center'}}>Login</h1>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">

                    <label className="form-label" htmlFor="email" style={{color:'plum'}}>Email address</label>
                    <input type="email" id="email" className="form-control" name={LoginFormKeys.Email} placeholder="softuni@gamil.com" value={values[LoginFormKeys.Email]} onChange={changeHandler} />
                    
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    
                    <label className="form-label" htmlFor="form2Example2" style={{color:'plum'}}>Password</label>
                    <input type="password" id="form2Example2" className="form-control" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} />
                    
                </div>
                <input type="submit" className="btn btn-primary btn-block mb-4 submit" value="Login" />
                <p style={{color:'plum'}}>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
    </section>
    );
};
