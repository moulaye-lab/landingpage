import React from 'react'
import Navbar from './Navbar';
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
