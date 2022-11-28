import Headshot from '../assets/headshot.jpg'

const Home = (props) => {
    return (
      <div className='container-fluid' id='homeProfile' ref={props.homeRef}>
        <h1>Jennifer Juarez</h1>
  
        <img className='profileImage' src={Headshot} alt='profile' />
        <h2>Software Engineer</h2>
  
  
      </div>
    );
  }
  
  export default Home;

  