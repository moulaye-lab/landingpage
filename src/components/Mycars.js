import React, { Component } from 'react'
import Cars from "./Cars";
import App from '../App.css';
export default class Mycars extends Component {
    
/*noCopy =() =>{
    alert('merci de ne pas copier');
}

onMouseOver =(e) =>{
    if(e.target.classList.contains('styled')){ // Si dans le contenu du target tu trouve la classe styled 
        e.target.classList.remove('styled');  //eleve le styled

    }else{
        e.target.classList.add('styled'); //e cest le journal d'evenement/target cest une fonction de e qui permet de recuperer l'element sur lequel on fait levenement dans ce cas il nous permet de recupere le contenu de h1 grace a classList.add on ajoute une classe a h1

    }
}*/
state={
 voiture :[
    {name: 'adidas',color:'red',year:2010},
    {name: 'adids',color:'blue',year:2020}, 
    {name: 'nike',color:'reddff',year:2010} 
 
 ]

}

    render() {
        return (
            <div className="cars">
               {/*} <h1 onMouseOver={this.onMouseOver}>{this.props.title}</h1>
                 <p onCopy={this.noCopy}>pkzfnkfpnpkrnrpnrrnjkrj</p>
                {*/}
                <Cars color={this.state.voiture[0].color} name={this.state.voiture[0].name} >{this.state.voiture[0].year}  </Cars>
                <Cars color={this.state.voiture[1].color} name={this.state.voiture[1].name} >{this.state.voiture[1].year} </Cars>
                <Cars color={this.state.voiture[2].color} name={this.state.voiture[2].name} >{this.state.voiture[2].year} </Cars>

            </div>
        )
    }
}
