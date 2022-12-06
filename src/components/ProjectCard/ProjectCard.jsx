import { Link } from "react-router-dom";
// import ProjectList from '../ProjectList/ProjectList'



const ProjectCard = (props) => {
  return (
    <Link to={`/project/${props.project.index}`}>
      {props.project.title}
    </Link>
  )
}

export default ProjectCard;