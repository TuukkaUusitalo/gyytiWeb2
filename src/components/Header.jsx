import logo from '../assets/images/logo_new.png'
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="nav-header">
      <HashLink smooth to="#home">
        <img src={logo} className="nav-logo" alt="Gyyti" />
      </HashLink>
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars" />
      </button>
    </div>
  );
}

export default Header;
