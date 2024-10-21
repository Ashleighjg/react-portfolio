import './Navbar.css';
import logo from '../../assets/logo.svg';
import Navigation from '../../Components/Navigation/Navigation'
import PropTypes from 'prop-types';


const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/*<ul className="nav-menu">
        <li className="nav-menu-item">
          <a href="#home" className="nav-menu-link">
            Home
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#about" className="nav-menu-link">
            About Me
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#projects" className="nav-menu-link">
            Projects
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#contact" className="nav-menu-link">
            Contact
          </a>
        </li>
        <li className="nav-menu-item">
          <a href="#resume" className="nav-menu-link">
            Resume
          </a>
        </li>
      </ul>*/}
    </div>
  );
};
Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
export default Navbar;
