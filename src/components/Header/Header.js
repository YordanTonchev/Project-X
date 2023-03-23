import { Link } from "react-router-dom";
export const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img className="" src="" alt="" /> 
    <Link className="navbar-brand" to="/footer">Navbar</Link>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        {/* <!-- Guest users and Logged users --> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalogue">Catalogue</Link>
        </li>
        {/* <!-- Logged users --> */} 
        <li className="nav-item">
          <Link className="nav-link" to="/offer-seat">Offer seat</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
        {/* <!-- Guest users --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
        
    );
};