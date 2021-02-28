import React, {useState, useEffect} from 'react';
import logo from './img/logo-desktop.png';
import Burger from './Burger';
import FadeIn from 'react-fade-in';
// import Fade from 'react-reveal/Fade';
const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    console.log('dwad')
    
    const updateWidth = () => {
        setWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });
    // console.log(open)
    if(width>990) {
        return(
            <div style={{color:'white', display: "flex", justifyContent:'flex-end'}}>
                <img src = {logo} style={{height:"127px", marginRight:"auto"}}/>
                
                {/* <div style={{display:"flex", justifyContent: "space-evenly"}}> */}
                    <span className="nav-item" style={{margin:'auto', marginLeft:'200px'}}> <a href="#" style={{textDecoration:'none', color:'white'}}>Home</a></span>
                    <span className="nav-item" style={{margin:'auto'}}> <a href="#testimonials" style={{textDecoration:'none', color:'white'}}>Testimonials</a> </span>
                    <span className="nav-item" style={{margin:'auto'}}> <a href="#" style={{textDecoration:'none', color:'white'}}>Services</a> </span>
                    <span className="nav-item" style={{margin:'auto'}}> <a href="#team" style={{textDecoration:'none', color:'white'}}>Team</a> </span>
                    <span className="nav-item" style={{margin:'auto', fontWeight:"bold"}}> <a href="#contact" style={{textDecoration:'none', color:'white'}}>Contact Us</a> </span>
            </div>
        )
    } else {
        return (
            <>
                <div style={{color:'white', display: "flex", justifyContent:'flex-end'}}>
                <img src = {logo} style={{height:"127px", marginRight:"auto"}}/>

                <div onClick={() => setOpen(!open)} style={{margin:'auto', marginRight:'10px'}}>
                <Burger  open = {open}/>
                </div>

                </div>
                <div style={{ position:'absolute', width:'100vw', right:'0px', zIndex: '10', top: '100px', backdropFilter: 'blur(10px)', transition:'200ms'}}>
                    
                    {open ? 
                    <FadeIn visible={true}>
                        <div className="nav-item" style={{paddingBottom:'15px', backdropFilter: 'blur(10px)'}}> Home</div>
                        <div className="nav-item" style={{paddingBottom:'15px'}}> Testimonials </div>
                        <div className="nav-item" style={{paddingBottom:'15px'}}> Services </div>
                        <div className="nav-item" style={{paddingBottom:'15px'}}> Team </div>
                        <div className="nav-item" style={{ fontWeight:"bold", paddingBottom:'15px'}}> Contact Us </div> 
                    </FadeIn> : ''}
                </div>
            </>
            
        )
    }
    
}

export default Navbar;