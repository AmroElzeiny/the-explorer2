import React from 'react';
import './footer.css';
import footer_logo from '../images/footer-logo.svg'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <img src={footer_logo} alt="img" className="footer-logo" />
            <div className="items-container">
                <a href='/' className="item1">About Us</a>
                <a href='/' className="item2">Privacy Policy</a>
                <a href='/' className="item3">Contact Us</a>
            </div>
        </div>
    </div>
    
  )
}

export default footer