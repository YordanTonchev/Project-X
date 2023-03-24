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
    const styles = {
        backgroundImage: 'url("https://www.evanshalshaw.com/-/media/evanshalshaw/blog/used-cars-that-can-fit-3-child-seats-in-the-back/volkswagen-touran-family-trip-1920x774px.ashx")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        border: '2px black solid'
    };

    return(
        <section className="py-5" id="register-page" style={styles}>
            <div className="container register-page" style={{marginLeft: '140px'}}>
                <h1 style={{color:'white'}}>Register</h1>
                <div className="register">
                    <form action="" method="post" onSubmit={onSubmit} style={{width:'25%'}}>
                        <div className="form-group">
                            <label htmlFor="email" style={{color:'white'}}>Email address</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"
                                value={values.emial} onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" style={{color:'white'}}>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                                value={values.password} onChange={changeHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rePassword" style={{color:'white'}}>Re-Password</label>
                            <input type="password" className="form-control" id="rePassword" placeholder="Re-Password"
                                name="rePassword" value={values.rePassword} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <p style={{color:'white'}}>Already have account? <Link to="/Login" style={{color:'white'}}>Login Now!</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{backgroundColor:'orange'}}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};