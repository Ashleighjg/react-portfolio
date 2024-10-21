import PropTypes from 'prop-types';
import '../Navbar/Navbar.css';

const Navigation = ({ currentPage, handlePageChange }) => {
  const pages = ['Homepage', 'About', 'Projects', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="nav-menu">
        {pages.map((page) => (
          <li key={page}>
            <a
              href={`#${page.toLowerCase()}`}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Navigation;
