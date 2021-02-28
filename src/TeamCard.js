import React from 'react';
import image from './img/round-dp.png'
const TeamCard = ({link, name, title}) => {
    return(
        <div className='team-card-container'>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={link} width='155' height = '148'/><br/>
            </div>
            <div style = {{display:'flex', justifyContent:'center'}}>
                <span className="team" style={{textAlign:'center'}}>{name}<br/><span style={{fontWeight:'lighter', fontSize:'16px'}}>{title}</span> </span>
            </div>
        </div>
    )
}

export default TeamCard;