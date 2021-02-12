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
                    <span className="nav-item" style={{margin:'auto', marginLeft:'200px'}}> Home</span>
                    <span className="nav-item" style={{margin:'auto'}}> Testimonials </span>
                    <span className="nav-item" style={{margin:'auto'}}> Services </span>
                    <span className="nav-item" style={{margin:'auto'}}> Team </span>
                    <span className="nav-item" style={{margin:'auto', fontWeight:"bold"}}> Contact Us </span>
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

                
                {/* <div style={{display:"flex", justifyContent: "space-evenly"}}> */}
                    {/* <span className="nav-item" style={{margin:'auto', marginLeft:'200px'}}> Home</span>
                    <span className="nav-item" style={{margin:'auto'}}> Testimonials </span>
                    <span className="nav-item" style={{margin:'auto'}}> Services </span>
                    <span className="nav-item" style={{margin:'auto'}}> Team </span>
                    <span className="nav-item" style={{margin:'auto', fontWeight:"bold"}}> Contact Us </span> */}
                </div>
                <div style={{ position:'absolute', width:'100vw', right:'0px'}}>
                    
                    {open ? 
                    <FadeIn visible={true}>
                        <div className="nav-item" > Home</div>
                        <div className="nav-item" > Testimonials </div>
                        <div className="nav-item" > Services </div>
                        <div className="nav-item" > Team </div>
                        <div className="nav-item" style={{ fontWeight:"bold"}}> Contact Us </div> 
                    </FadeIn> : ''}
                </div>
            </>
            
        )
    }
    
}

export default Navbar;