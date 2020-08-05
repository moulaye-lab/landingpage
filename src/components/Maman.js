import React, { Component } from 'react'
import Toto from "./Toto";
export default class Maman extends Component {
    state={
           messageMaman: null,
           messageToto:null


    }
    
    ordreMaman = () =>{
  this.setState({
    messageMaman: 'Va manger attieke'

  })
    }
    
    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la mere</button>
        <p>{this.state.messageMaman}</p>
                <hr />
                <Toto name="toto mange" />
            </div>
        )
    }
}
