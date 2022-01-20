<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to my super store</h1>
            <h3>Check our amazing catalog</h3>
            <Link className="btn btn-lg btn-primary" to="/catalog">See Catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></Link>
        </div>
    );
  }
  
=======
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to my super store</h1>
            <h3>Check our amazing catalog</h3>
            <Link className="btn btn-lg btn-primary" to="/catalog">See Catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></Link>
        </div>
    );
  }
  
>>>>>>> 432fa2d14a226d65e57262af4e4d497d02ba0488
  export default Home;