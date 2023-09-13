import './Navbar.css'
import { Link } from 'react-router-dom';

const NAVBAR = () => {
    return ( 
        <div className="NAVBAR">
            <div className="navbar-content">
                <div className="brand">
                  <h1>FakeApp</h1>
                </div>
                <nav>
                    <div className="nav-item cursor">
                        <Link to={`/`}><h2>
                        Home
                        </h2> </Link>
                    </div>
                    <div className="nav-item cursor">
                        <Link to={`/Settings`}><h2>
                        SETTINGS
                        </h2>  </Link>
                    </div>
                </nav>
                
            </div>
        </div>
     );
}
 
export default NAVBAR;