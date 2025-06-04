import { Link } from "react-router-dom"; // Import Link for routing
import "../Css/Nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BurgerX</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Deals1">Deals</Link>
              </li>
            </ul>
            <a className="btn btn-outline-success" type="button" href="/Register">Register</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
