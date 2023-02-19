import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../images/Logo.svg';
import menu_icon from '../images/menu-icon.svg';
import menu_x from '../images/menu-x.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [icon, setIcon] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <div className="header-container">
        <img src={logo} alt="img" className="header-logo" />
        <div className="header-items">
          <a href="/" className="header-item1">Articles</a>
          <a href="/" className="header-item2">Podcasts</a>
          <a href="/" className="header-item3">E-guides</a>
          <a href="/" className="header-item4">About Us</a>
        </div>
        {icon &&  width < 800 &&<img
          src={menu_icon}
          alt="img"
          className="menu-icon"
          id="menu-icon"
          onResize={()=>setWidth(window.innerWidth)}
          onClick={() => {setIsMenuOpen(true);setIcon(false)}}
        />}


        {isMenuOpen &&  width < 800 && (
          <img
            src={menu_x}
            alt="img"
            className="menu-x"
            id="menu-x"
            onClick={() => {setIsMenuOpen(false);setIcon(true)}}
          />
        )}
      </div>
      <div className="line" />
      
      {isMenuOpen && width < 800 && (<div className='mob-menu'>
            <a href="/" className="mob1">Articles</a>
            <a href="/" className="mob1">Podcasts</a>
            <a href="/" className="mob1">E-guides</a>
            <a href="/" className="mob1">About Us</a>
      </div>)}



    </div>

    
  );
};

export default Header;
