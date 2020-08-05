import React, { Component } from 'react'
import { FaEnvelope} from "react-icons/fa";
import Section7Contains2 from "./Section7Contains2"
export default class Section7Contains extends Component {
    render() {
        return (
            <div className="section7">
            <div className="container">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-4">
                   <h3>COMPANY <span>LOGO</span></h3>
                   <p>Lorem ipsum  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                   <br />
                    <h4> <icon><FaEnvelope/></icon>   compagnyemail.com</h4>
                   </div>
                   <div className="col-md-2">
                   <h4>Quicks Links</h4>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    </ul>

                   </div>
                   <div className="col-md-2">
                   <h4>Quicks Links</h4>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    </ul>

                   </div>
                   <div className="col-md-2">
                   <h4>Quicks Links</h4>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    </ul>

                   </div>
                   <div className="col-md-1"></div>

                  </div>
                  </div>
                  <hr className="hr1"/>
                <Section7Contains2 />
                </div>
        )
    }
}
