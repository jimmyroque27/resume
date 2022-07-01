import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton,true);

  return (
    <>
      <nav className='Navbar2'>
        <div className='Navbar2-container'>
          <Link to='/resume' className='Navbar2-logo' onClick={closeMobileMenu}>
            Jimmy Santos
             <i className='fa fa-user-circle' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
            <li className='nav-item2'>
              <Link to='/profile' className='nav-links2' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className='nav-item2'>
              <Link
                to='/education'
                className='nav-links2'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className='nav-item2'>
              <Link
                to='/jobhistory'
                className='nav-links2'
                onClick={closeMobileMenu}
              >
                Job History
              </Link>
            </li>
            <li className='nav-item2'>
              <Link
                to='/portfolio'
                className='nav-links2'
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className='nav-item2'>
              <Link
                to='/contactus'
                className='nav-links2'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            

            <li>
              <Link
                to='/sign-up'
                className='nav-links2-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
