import React, { Component } from 'react'
import capture from "../images/capture.jpg";
export default class Section2Contains extends Component {
    render() {
        return (
             <div className="section2Contains">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5"> 
                    <div className="section2_text">   
                        <h5>Drean big achive Big</h5>
                        <h4>WE TAKE YOUR BUSSINESS TO <br>
                        </br>NEW HIGHTS</h4>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                        
                        </p>
                        <button className="btn btn-warning">READ MORE</button>
                    </div>  



                    </div>
                    <div className="section2_img">
                    <div className="col-md-5"><img src={capture}/></div>
                    
                    </div>
                    <div className="col-md-1"></div>


                </div>
            </div>
            </div>
        )
    }
}
