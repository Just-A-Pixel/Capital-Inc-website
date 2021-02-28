import React from 'react';
import logo from './img/logo-footer.svg';
import email from './img/email.svg';
import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import './Footer.css';

const Footer =()=> {
    return(
        <div className="outer-box">
            <img src={logo} style={{height:"214px", margin:'auto', marginTop:'30px', marginBottom:'70px'}}/>
            <div className="icons">
            <img className='icon' src={email} />
            <img className='icon' src={instagram} />
            <img className='icon' src={facebook} />
            <img className='icon' src={twitter} />
            </div>
            <div className='line'></div>
            <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto', width:'100%', maxWidth:'1000px', marginTop:'0'}}>
                <span className='footer-text'>All Rights Reserved</span>
                <span className='footer-text'>Privacy Policy</span>
                <span className='footer-text'>Terms Of Service</span>
            </div>
        </div>
    )
}

export default Footer