import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import LinkIcon from '@material-ui/icons/LinkedIn'
import GitIcon from '@material-ui/icons/GitHub'

import { contact } from '../../portfolio'

import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div id='line'>
      <a className='ssec' href={`mailto:${contact.email}`} target='_blank' rel="noreferrer">
        {/* <span type='button' className='btn btn--outline'>
          Email me
        </span> */}
        <div id='icon'><MailIcon/></div>
        <div>navni.hari@gmail.com</div>
      </a>
      <a className='ssec1' href={`Callto:${contact.phone}`}  target='_blank' rel="noreferrer">
        {/* <span type='button' className='btn btn--outline'>
          Phone me
        </span> */}
        <div id='icon'><PhoneIcon/></div>
        <div>9482125826</div>
      </a>
      <a className='ssec2' href="https://www.linkedin.com/in/navaneet-h-c-6602b71b4/"  target='_blank' rel="noreferrer">
      <div id='icon'><LinkIcon/></div>
        <div>Navaneet h c</div>
      </a>
      <a className='ssec3' href="https://github.com/Navaneet1999"  target="_blank" rel="noreferrer">
      <div id='icon'><GitIcon/></div>
        <div>Navaneet1999</div>
      </a>
      </div>
      
      
    </section>
  )
}

export default Contact
