import Headshot from '../assets/headshot.jpg'
// import styles from '../Home.module.css'


const Home = (props) => {
    return (
      <div className='container-fluid' id='homeProfile' ref={props.homeRef}>
        <h1>Hey, there my name is Jennifer Juarez</h1>
  
        <img className='profileImage' src={Headshot} alt='profile' />
        <h2> I am a Software Engineer with a background in business, management, coaching and athletics!</h2>
  
  
      </div>
    );
  }
  
  export default Home;

  