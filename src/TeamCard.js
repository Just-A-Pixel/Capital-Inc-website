import React from 'react';
import image from './img/round-dp.png'
const TeamCard = () => {
    return(
        <div className='team-card-container'>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={image} width='155' height = '148'/><br/>
            </div>
            <div style = {{display:'flex', justifyContent:'center'}}>
                <span className="team" style={{textAlign:'center'}}>XYZ<br/> CEO FOUNDER </span>
            </div>
        </div>
    )
}

export default TeamCard;