import React, { Component } from 'react'

export default class Section6Contains extends Component {
    render() {
        return (
            <>
            <div className="cont">
              <h1>NEED HELP?</h1>
               <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum <br/> lorem ipsum </p>
            
              <div className="container">
              <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-3">
              <input type="text" placeholder="Name Here" className="inputS5"></input>
            
              </div>
              <div className="col-md-3">
                  <input type="text" placeholder="Email Here" className="inputS6"></input>
            
              </div>
              <div className="col-md-2">
                  <input type="Submit" value="submit" className="inputS"></input>
            
              </div>
              <div className="col-md-2"></div>


              </div>
              </div>
              </div>
            </>
        )
    }
}
