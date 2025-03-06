import './Resume.css';
import resumedownload from '../../assets/resumedownload.pdf'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2 className="resume-title">Check out my Resume!
        <br />Just click the link below</h2>
      <div className="resume-download">
        <a href={resumedownload} download>
          Download Resume
        </a>
      </div>
      
    </section>
  );

};

export default Resume;
