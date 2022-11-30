import ResumeFile from '../assets/jennifers-resume.pdf'
import ScreenShot from '../assets/resume-page-1.png'
import ScreenShot2 from '../assets/resume-page-2.png'


const Resume = (props) => {
  return ( 
    <div ref={props.resumeRef} id="resumeProfile">
      <img className='resumeImage' src={ScreenShot} alt='resume-screenshot' />
      <img className='resumeImage' src={ScreenShot2} alt='resume-screenshot' />
      <h1>Jennifer's Resume</h1>
      <p>Click the link to download <a href={ResumeFile}>my resume</a></p>
    </div>
   );
}
 

export default Resume;