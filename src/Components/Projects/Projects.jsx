import './Projects.css';
import project_data from '../../assets/project_data';
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1> My latest Projects</h1>
          </div>
          

      <div className="projects-container">
              {project_data.map((project, index) => {
            return <div key={index} className="project-card">
            <h3>{project.p_name}</h3>
            <img src={project.p_img} alt="" />
            <a href={project.applink} target="_blank" rel="noopener noreferrer"> Deployed App</a>
            <br />
                <a
              href={project.github_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        })}
          </div>
          

      <div className="projects-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default Projects