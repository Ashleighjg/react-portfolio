import './About.css';
import profile_img from '../../assets/Ashleigh.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-p">
            <p>
              I am a passionate and results-driven Full Stack Developer,
              combining over a decade of experience in data strategy and
              operations with expertise in modern web development technologies.
              Through the Full Stack Flex Coding Bootcamp, I’ve developed
              proficiency in JavaScript, React, Node.js, Express, and MongoDB,
              allowing me to build robust, scalable applications that solve
              real-world business problems. 
              <br /> <br />
              My strong foundation in data management and process automation
              complements my development skills, enabling me to design
              efficient, data-driven solutions with a focus on user experience
              and performance. I thrive in collaborative environments,
              continuously learning and applying innovative technologies to
              create impactful, high-quality software.{' '}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills-p">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>JavaScript</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>React JS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>React</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>MongoDB</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
