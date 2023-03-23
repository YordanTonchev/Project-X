import { Link } from "react-router-dom";
export const Register = () =>{
    return(
        <section className="py-5" id="register-page">
            <div className="container register-page">
                <h1>Register</h1>
                <div className="register">
                    <form action="" method="">
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name=""
                                value="" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name=""
                                value="" />
                        </div>
                        <div className="form-group">
                            <label for="rePassword">Re-Password</label>
                            <input type="password" className="form-control" id="rePassword" placeholder="Re-Password"
                                name="" value="" />
                        </div>
                        <label>Gender</label>
                        <div className="gender">
                            <input type="radio" id="female" name="" value="" />
                            <label for="female">Female</label>
                            <input type="radio" id="male" name="" value="" checked />
                            <label for="male">Male</label>
                        </div>
                        <div className="form-group">
                            <p>Already have account? <Link to="/Login">Login Now!</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};