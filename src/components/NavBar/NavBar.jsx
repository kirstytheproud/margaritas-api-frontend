import { Link} from "react-router-dom";
import "./NavBar.scss"


const NavBar = () => {
    const mobileNav = (
        <nav className="navbar__nav">
          <Link className="navbar__nav-item" to="/">
            Home
          </Link>
          <Link className="navbar__nav-item" to="/recipes">
            About
          </Link>
          <Link className="navbar__nav-item" to="/order">
            Services
          </Link>

        </nav>
      );


  return mobileNav;
}

export default NavBar;