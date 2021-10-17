import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../button/Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true)
      }
    }

  window.addEventListener('resize', showButton)

  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src='assets/images/ubi-logo.png' alt='ubi logo' height={30} width={30}/>
          <div className="ubi-nav-text">UBISOFT</div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/uplay' className='nav-links' onClick={closeMobileMenu}>
              UPLAY+
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/store' className='nav-links' onClick={closeMobileMenu}>
              STORE
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/games' className='nav-links' onClick={closeMobileMenu}>
              MORE GAMES
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
              NEWS
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/forums' className='nav-links' onClick={closeMobileMenu}>
              FORUMS
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
              SUPPORT
            </Link>
          </li>
          </ul>
          </div>
          </div>
          </>
          )
        }

export default Navbar
