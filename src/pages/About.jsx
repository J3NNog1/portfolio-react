import AboutMe from '../assets/about-me-pic.jpg'


const About = (props) => {
    return (
      <div ref={props.aboutRef} className='aboutSection'>
        <h1>About Me</h1>
        <img className='profileImage' src={AboutMe} alt="jennifer-profile" />
        <div className='aboutDesc'>
          <p>
            I am an aspiring software engineer and countinue to develop my skills both creatively and professionally. I would like to continue growing and learning all while keeping up with industry knowledge. My background in Business and as collegiate athlete makes me a business savy & team player.    </p>
          <p>
            In my personal time, coach Life Universities women's wrestling team to inspire young atheletes to be the best version of themselves. I am a very athletic and creative person who loves trying new things and making them.
          </p>
        </div>
  
  
      </div>
    ); 
  }
  
  export default About;