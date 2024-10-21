import './Resume.css';
import resumedownload from '../../assets/resumedownload.pdf'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2 className="resume-title">Check out my Resume!</h2>
      <div className="resume-download">
        <a href={resumedownload} download>
          Download Resume
        </a>
      </div>
      <div className="resume-pro">
        <h3>Proficiencies</h3>
        <ul className="pro-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Webpack</li>
          <li>IndexDB</li>
          <li>APIs</li>
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );

};

export default Resume;
