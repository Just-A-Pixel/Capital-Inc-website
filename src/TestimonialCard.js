import React from 'react'
import image from './img/dp.png'
const TestimonialCard = () => {
    return(
    <>
        <div className='card-container'>
  
            <div style={{position:'relative', transform: 'translateY(-50px)',paddingBottom: '100%'  }}>
                <img className='testimonial-image' src={image} style={{zIndex:'100'}}/>
                <br></br>
                <div style={{display:'flex', justifyContent:'center', color:'white'}}>
                    <span className="name">Sanskriti Negi <br/> CA, Gurgaon</span>
                </div>
                <div style={{display:'flex', justifyContent:'center', textAlign:'center', width:'240px', marginTop: '50px', marginLeft: '25px', color:'white', fontSize:'20px'}}>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tempus libero, sed aliquam diam. Nam 
                    
                </div>
            </div>
        </div>
    </>

        
    )
}
export default TestimonialCard