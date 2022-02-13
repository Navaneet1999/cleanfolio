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
      <a className='ssec' href={`mailto:${contact.email}`} target="_b">
        {/* <span type='button' className='btn btn--outline'>
          Email me
        </span> */}
        <div id='icon'><MailIcon/></div>
        <div>navni.hari@gmail.com</div>
      </a>
      <a className='ssec1' href={`Callto:${contact.phone}`}  target="_b">
        {/* <span type='button' className='btn btn--outline'>
          Phone me
        </span> */}
        <div id='icon'><PhoneIcon/></div>
        <div>9482125826</div>
      </a>
      <a className='ssec2' href={`Contactto:${contact.linkdn}`}  target="_b">
      <div id='icon'><LinkIcon/></div>
        <div>Navaneet h c</div>
      </a>
      <a className='ssec3' href={`Contactto:${contact.github}`}  target="_b">
      <div id='icon'><GitIcon/></div>
        <div>Navaneet1999</div>
      </a>
      </div>
      
      
    </section>
  )
}

export default Contact
