
import './Footer.css'
//import stackover_icon from '../../assets/stackover_icon.jpg'
//import github_icon from '../../assets/github_icon.jpg';
//import linkedIn_icon from '../../assets/linkedIn_icon.jpg';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">

        <a href="https://github.com/Ashleighjg" className="icon">
          <i className="fa-brands fa-github"></i>
        </a>

        <br />

        <a
          href="https://www.linkedin.com/in/ashleigh-chatman-688327186/"
          className="icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <br />

        <a
          href="https://stackoverflow.com/users/25049667/ashleigh-c"
          className="icon"
        >
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p className="footer-p">
          <i className="fa-regular fa-copyright"></i> 2024 Ashleigh Chatman. All
          rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer
