// import ProjectPreview from '../ProjectPreview/ProjectPreview'



const ProjectsList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.projects.map(project =>
        
          <li key={project.title}>
            <p>{project.description}</p>
            <p>{project.image}</p>
            <p>Repository link: {project.repositoryLink}</p>
            <p>Deployment Link: {project.deploymentLink}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ProjectsList;