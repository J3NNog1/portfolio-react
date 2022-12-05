
import ProjectCard from '../ProjectCard/ProjectCard'



function ProjectsList (props) {
  return (
    <>
      
        <div className={ProjectsList}>
          {props.projects.map((project, idx) =>
          <ProjectCard title={project.title} image={project.image} key={idx} />
        )}
        </div>
    
    </>
  )
}


export default ProjectsList