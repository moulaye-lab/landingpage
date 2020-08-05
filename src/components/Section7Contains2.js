import React, { Component } from 'react'
import { FaPhone,FaMapMarkerAlt,FaFacebook,FaTwitter,FaGoogle} from "react-icons/fa";

export default class Section7Contains2 extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4">
               
               <h4><icon><FaPhone /></icon> 0022547896547 / 26587469</h4>
               <br />
               <h4><icon><FaMapMarkerAlt /></icon> 22 rue du grand makono</h4>
               </div>
               <div className="col-md-2">
                <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Testimonial</li>

                </ul>

               </div>
               <div className="col-md-2">
               <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Testimonial</li>

                </ul>

               </div>
               <div className="col-md-2">
               
                <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Testimonial</li>

                </ul>
                

               </div>
               <div className="col-md-1"></div>

              </div>
              <hr/>
              All Rights Reserved by <span> Moulaye</span> 2020 <div className="social"><FaFacebook /><FaTwitter /><FaGoogle /></div>
              </div>
              
        )
    }
}
