import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <a href="#" className="nav-menu-link">
            Home
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#" className="nav-menu-link">
            About Me
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#" className="nav-menu-link">
            Portfolio
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#" className="nav-menu-link">
            Contact
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#" className="nav-menu-link">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
