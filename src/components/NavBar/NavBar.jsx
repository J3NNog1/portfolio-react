import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Info</Link>
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </header>
  );
};

export default NavBar; 