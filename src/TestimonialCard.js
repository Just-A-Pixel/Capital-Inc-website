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
                    <span className="name" style={{fontWeight:'bold', textAlign:'center'}}>Shrikar Parashar <br/> Head of Business development, GoSats </span>
                </div>
                <div style={{display:'flex', justifyContent:'center', textAlign:'center', width:'240px', marginTop: '50px', marginLeft: '25px', color:'white', fontSize:'16px', height:'100px'}}>
                    
                Capital Inc has been remarkably consistent with their promised profits and maintains it's consistency.  The flexibility and their risk management strategies has made the entire process hassle-free. I will recommend everyone for this experience.
                </div>
            </div>
        </div>
    </>

        
    )
}
export default TestimonialCard