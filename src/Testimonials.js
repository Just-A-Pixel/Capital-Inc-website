import React, {useState, useEffect} from 'react';
import TestimonialCard from './TestimonialCard';
import Carousel, { consts } from 'react-elastic-carousel';


const Testimonials = () => {
    const [width, setWidth] = useState(window.innerWidth); 

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    });

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '<' : '>'
        return (
          <div class="slider-btn" onClick={onClick} disabled={isEdge} >
            {pointer}
          </div>
        )
    }

    if(width>990) {
    return(
        <>

        <h1 className="section-title" id="testimonials">
             Testimonials
        </h1>
           <br />
           <div style={{width:'100%',margin:'auto', maxWidth: '1300px'}}>
             <br />
           <Carousel itemsToScroll={2} itemsToShow={2} renderArrow = {myArrow}
            renderPagination={({ pages, activePage, onClick }) => {
                return (
                <div></div>
                )
            }}
           >
           <TestimonialCard /><TestimonialCard />
            </Carousel>
           </div>
            
        
        </>
    )
    } else {
      return(
        <>
        <h1 className="section-title" >
             Testimonials
        </h1>
           <br />
           <div style={{width:'100%',margin:'auto', maxWidth: '1300px'}}>
             <br />
           <Carousel itemsToScroll={1} itemsToShow={1} renderArrow = {myArrow}
            renderPagination={({ pages, activePage, onClick }) => {
                return (
                <div></div>
                )
            }}
           >
           <TestimonialCard /><TestimonialCard /><TestimonialCard /><TestimonialCard />
            </Carousel>
           </div>
            
        
        </>
      )
    }
}

export default Testimonials