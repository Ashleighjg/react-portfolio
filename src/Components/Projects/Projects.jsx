import './Projects.css';
import project_data from '../../assets/project_data';
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
      <div className='projects'>
          <div className='projects-title'>
              <h1> My latest Projects</h1>
          </div>
          <div className='projects-container'>
              {project_data.map((project,index) => {
                  return <img key={index} src={project.p_img} alt="" />
              })}
              
          </div>
          <div className="projects-showmore">
              <p>
                 Show More 
              </p>
              <img src={arrow_icon} alt="" />
          </div>
      </div>
  )
}

export default Projects