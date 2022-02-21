import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <div className='nav_left'>
      <h3 >
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      </div>
      
      <div className='nav_right'>
      <Navbar />
      </div>
     
    </header>
  )
}

export default Header
