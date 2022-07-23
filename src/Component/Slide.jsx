import React from 'react';
import './Slide.css';
// import bootstrap from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const Slide = () => {


    const nextSlide =()=>{

        document.getElementById("myImage")
        .src= "Tommarowplan.jpg";
    }

    const PrevSlide =()=>{
        document.getElementById("myImage")
        .src="Yesterdayplan.jpg";
    }
    const restartSlide =()=>{
            document.getElementById("myImage")
            .src="TodaysPlan.jpg";
    }
    return (
        <div >
            
            <div className='nav-container'>
                <h1>Slideshow App </h1>
             </div>
            <div className='buttons'>
        <pre><Button variant ="success" onClick={restartSlide} >Restart</Button>  </pre>
            <pre><Button variant ="success" onClick= {PrevSlide}>Prev</Button>  </pre>
             <pre><Button variant ="success"  onClick={nextSlide}>Next</Button>  </pre>

            </div>
            <div className='main-container' >
            <img id ="myImage" src ="TodaysPlan.jpg" width='680' height='380' />
            
            </div>
    
            {/* <img src='TodaysPlan.jpg /> */}
        </div>

          );
};

export default Slide;