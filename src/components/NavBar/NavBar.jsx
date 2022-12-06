import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      {/* <img
        src='/images/logo.gif'
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      /> */}
      {/* <Link to='/'>Jennifer Juarez</Link> */}
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Info</Link>
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </header>
  );
};

export default NavBar; 