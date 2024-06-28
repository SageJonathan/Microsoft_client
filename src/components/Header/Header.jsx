import './Header.scss'
import logo from '../../assets/images/micro_logo.png'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
     <div className='nav'>
    <div className='nav__logo-container'>
    <img className='nav__logo' src={logo} alt="Logo" />

    </div>
    <ul className='nav__links'>
      <li className='nav__link'>
      Learn More
      </li>
      <li className='nav__link'>
        Events
        </li>
    </ul>
  </div>
    </>
  )
}

export default Header
