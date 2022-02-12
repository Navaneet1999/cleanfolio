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
      <a href={`mailto:${contact.email}`} target="_b">
        {/* <span type='button' className='btn btn--outline'>
          Email me
        </span> */}
        <MailIcon/>
        <div>navni.hari@gmail.com</div>
      </a>
      <a href={`Callto:${contact.phone}`}  target="_b">
        {/* <span type='button' className='btn btn--outline'>
          Phone me
        </span> */}
        <PhoneIcon/>
        <div>9482125826</div>
      </a>
      <a href={`Contactto:${contact.linkdn}`}  target="_b">
        <LinkIcon/>
        <div>Navaneet h c</div>
      </a>
      <a href={`Contactto:${contact.github}`}  target="_b">
        <GitIcon/>
        <div>Navaneet@1999</div>
      </a>
      
    </section>
  )
}

export default Contact
