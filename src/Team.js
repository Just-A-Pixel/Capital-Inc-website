import React from 'react';
import TeamCard from './TeamCard';
import soumya from './img/soumya.png';
import pranjal from './img/pranjal.png';
import tanisha from './img/Tanisha.png';
import amogh from './img/Amogh.png';
const Team = ()=> {
    return (
    <>
        <h1 className="section-title" id='team'>
             Team
        </h1>

        <div className="row" style={{width:'100%', maxWidth:'1000px',margin:'auto'}}>
            <div className="col-sm-6" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard link = {soumya} name='Soumya Ranjan' title='Chief Strategy Officer'/>
            </div>
            <div className="col-sm-6" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard link = {pranjal} name='Pranjal Bharwaj' title='Chief Research Officer'/>
            </div>
        </div>
        <div className="row" style={{width:'100%', maxWidth:'1000px',margin:'auto'}}>
            <div className="col-sm-6" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard link = {tanisha} name='Tanisha Pandey' title='Chief Technical Officer'/>
            </div>
            <div className="col-sm-6" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard link = {amogh} name='Amogh Shukla' title='Chief Investment Officer'/>
            </div>
        </div>
    </>
    )
}

export default Team;