import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Photo from '../Profile/Profile'
import './About.css'

// const image = "/public/IMG_20220211_121935.jpg"
console.log(Photo)
const About = () => {
  const { name, role, description, resume, social} = about;
  // if(!about.length) return null;

  return (
    <div className='about center' id='about'>
     
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
        
      )}
      <div>
      <Photo/>
      </div>
      
     
      {role && <h2 className='about__role'>
      <h2 className='section__title'>ABOUT</h2>
         {role}.</h2>}
    
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact center'>
      {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_b'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_b'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
