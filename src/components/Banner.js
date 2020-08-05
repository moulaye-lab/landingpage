import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import wo from '../images/wo.jpg';

import 'bootstrap/dist/css/bootstrap.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
<div className="text"> 
<h1>THE COMPANY <span>TITLE</span> AND <span>SLOGAN</span> GOES HERE</h1>
<p>ipsum ipsum ipsim ispum ispum ispumispumispum ispum ispumispum ispumispum ispum ispumispumispumispum ispumispum ispum ispum ispum ispum  ispum  ispum  ispum ispum ispum ispum </p>
<span className="button"><button className="btn-lg btn-warning">PURCHASSE NOW</button> 
<Link to="/"> 
<h5> CONTACT US</h5>
</Link></span>
</div>
                    </div>
                    
                    <div className="col-lg-5" ><img className="bannerimg" src ={wo} /></div>
                    <div className="col-lg-1" ></div>


                    



                    


                </div>
            </div>
        )
    }
}
