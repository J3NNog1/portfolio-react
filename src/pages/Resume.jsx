import ResumeFile from '../assets/jennifers-resume.pdf'
import ScreenShot from '../assets/resume-page-1.png'
import ScreenShot2 from '../assets/resume-page-2.png'


const Resume = (props) => {
  return ( 
    <div ref={props.resumeRef} id="resumeProfile">
      <img className='resumeImage-1' src={ScreenShot} alt='resume-screenshot-1' />
      <img className='resumeImage-2' src={ScreenShot2} alt='resume-screenshot-2' />
      <h1>Jennifer's Resume</h1>
      <p>Click the link to download <a href={ResumeFile}>my resume</a></p>
    </div>
   );
}
 

export default Resume;