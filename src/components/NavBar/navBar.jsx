import './navBar.css';
import storeContext from "../../context/storeContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

  const cart = useContext(storeContext).cart;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us </Link>
            </li>
          </ul>
          <form className="d-flex">
            {/* <Link className="btn btn-outline btn-outline-light" to="/cart">
            <span className="badge bg-primary">0</span>
            View Cart
        </Link> */}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
