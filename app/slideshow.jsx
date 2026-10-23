import React, {useState} from 'react';



const slideShow = ({images}) => {
//keep trackof the current active image index
    const [currentIndex, setCurrentIndex] = useState(0);

    if(!images || images.length === 0){
        return <div className = "slideshow-empty"> No images</div>
    }

    const prevSlide = () => {
        
    }

}