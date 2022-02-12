import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import LinkIcon from '@material-ui/icons/LinkedIn'
import GitIcon from '@material-ui/icons/GitHub'
import InstaIcon from '@material-ui/icons/Instagram'
import FaceIcon from '@material-ui/icons/Facebook'
import { contact } from '../../portfolio'

import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`} target="_b">
        {/* <span type='button' className='btn btn--outline'>
          Email me
        </span> */}
        <MailIcon/>
      </a>
      <a href={`Callto:${contact.phone}`}  target="_b">
        {/* <span type='button' className='btn btn--outline'>
          Phone me
        </span> */}
        <PhoneIcon/>
      </a>
      <a href={`Contactto:${contact.linkdn}`}  target="_b">
        <LinkIcon/>
      </a>
      <a href={`Contactto:${contact.github}`}  target="_b">
        <GitIcon/>
      </a>
      <a href={`Contactto:${contact.insta}`}  target="_b">
        <InstaIcon/>
      </a>
      <a href={`Contactto:${contact.facebook}`}  target="_b">
        <FaceIcon/>
      </a>
    </section>
  )
}

export default Contact
