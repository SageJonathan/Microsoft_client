import './Header.scss'
import logo from '../../assets/images/micro_logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <div className='nav'>
    <div className='nav__logo-container'>
      <Link to="/">
      <img className='nav__logo' src={logo} alt="Logo" />
      </Link>

    </div>
    <ul className='nav__links'>
      <li className='nav__link'>
         <Link className="link" to="/information"> Learn More</Link> 
      </li>
      <li className='nav__link'>
      <Link  className="link" to="/events"> Events</Link> 
        </li>
    </ul>
  </div>
    </>
  )
}

export default Header;
