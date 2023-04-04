import styles from './Register.module.css'
import { Link } from "react-router-dom";

import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () =>{
    const {onRegisterSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password:'',
        rePassword: '',
    }, onRegisterSubmit);
    

    return(
        <section className={styles.section} id="register-page">
            <div className="container register-page"  style={{marginLeft: '140px'}}>
                <h1 >Register</h1>
                <div className={styles.register}>
                    <form id="register" method="post" onSubmit={onSubmit} >
                        <div className="form-group">
                            <label htmlFor="email" >Email address</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"
                                value={values.emial} onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" >Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                                value={values.password} onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rePassword">Re-Password</label>
                            <input type="password" className="form-control" id="rePassword" placeholder="Re-Password"
                                name="rePassword" value={values.rePassword} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <p >Already have account? <Link to="/Login" >Login Now!</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};