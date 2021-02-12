import React from 'react';
import image from './img/expert.svg'
import Fade from 'react-reveal/Fade';
const Header = () => {
    return(
        <>
        <br/><br/><br/><br/>
           <div className="header">
               <Fade left>
                <div className="title">
                    <h1>Your <span style={{color:'#1A8D54'}}>Stocks</span><br/>
                    in our Hands</h1>
                </div>
                </Fade>
                <Fade right>
                <div className="img-container">
                    <img className="img-expert" src={image} />
                </div>
                </Fade>
            </div> 
        </>
    )
}

export default Header