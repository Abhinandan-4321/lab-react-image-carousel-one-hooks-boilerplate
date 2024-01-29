import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    let[index, setIndex] = useState(0)
    const length = images.length
    
    const rightClick = () => {
        setIndex(
            index<=0?index=length-1: index-1
        )
    }
    const leftClick = () => {
        setIndex(
            index>=length-1?index=0:index+1
        )
    }
    

    return(
        <div>
            <div style={{backgroundImage:  `url(${images[index].img})`}} className = "image-size">
                <div className="left" onClick= {leftClick}><ArrowBackIosIcon style = {{fontSize:30}} /></div>
                <div className="text">
                    <h1>{images[index].title}</h1>
                    <h1>{images [index].subtitle}</h1>
                </div>
                <div className="right" onClick= {rightClick}><ArrowForwardIosIcon style = {{fontSize:30}} /></div>
            </div>  
        </div>
    )
}

export default Carousel;