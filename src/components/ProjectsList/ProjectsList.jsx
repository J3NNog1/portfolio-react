// import ProjectCard from '../ProjectCard/ProjectCard'



const ProjectsList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.projects.map(project =>
        
          <li key={project.title}>
            <p>{project.description}</p>
            <p>Repository link: {project.repositoryLink}</p>
            <p>Deployment Link: {project.depolymentLink}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ProjectsList;