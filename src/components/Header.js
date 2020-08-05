import React from 'react'
import Navbar from './Navbar';
import ImageFond from './ImageFond';
import Banner from './Banner';

import woman from '../images/woman.jpg';

export default function header() {
    return (
       <>
        <div className="header">
             
             <Navbar /> 
             <Banner /> 
        </div>    
             
             

            
        
        </>
    )
}
