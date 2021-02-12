import React from 'react';
import TeamCard from './TeamCard'
const Team = ()=> {
    return (
    <>
        <h1 className="section-title">
             Team
        </h1>

        <div className="row">
            <div className="col-sm-4" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard />
            </div>
            <div className="col-sm-4" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard />
            </div>
            <div className="col-sm-4" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard />
            </div>
        </div>
        <div className="row" style={{}}>
            <div className="col-sm-6" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard />
            </div>
            <div className="col-sm-6" style={{display:'flex', justifyContent:'center', marginTop:'92px'}}>
                <TeamCard />
            </div>
        </div>
    </>
    )
}

export default Team;