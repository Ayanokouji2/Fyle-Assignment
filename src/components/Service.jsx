import React, { useState, useEffect } from 'react';
import images from '../helper/images'


const ServiceComponent = () => {
    return(
        <div className='services'>
            <h3 className='wwd'>What we do</h3>
            <div className='some'>
                <h1>Services provide for you</h1>
                <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
            </div>
            <div className="image-container">
                {images && images.map((image, index)=>{
                    return(
                        <div key={index} className='image'>
                            <img src={image} alt={image} />
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default ServiceComponent;
