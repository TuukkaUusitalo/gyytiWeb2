import logo from '../assets/images/logo_new.png'

function Header() {
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="Gyyti" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars" />
      </button>
    </div>
  );
}

export default Header;
