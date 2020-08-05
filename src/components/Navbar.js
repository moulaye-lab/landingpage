import React, { Component } from 'react'
import {FaAlignRight,FaSearch,FaBabyCarriage} from 'react-icons/fa'
import{Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


export default class Navbar extends Component {
state={

    isOpen:false
};
 handleToggle = () =>{
this.setState({isOpen:!this.state.isOpen});


 };
    render() {
        return (
            <nav className="navbar">
<div className="nav-center">
<div className="nav-header">
<div className="logor">
<Link to="/"> 
<h3>COMPANY <span>LOGO</span></h3>
</Link>
</div>
<button 
type="button" 
className="nav-btn" 
onClick={this.handleToggle}>
<FaAlignRight className="nav-icon" />{/* il provient du react icons cest le menu burger */}
</button>
</div>



<ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}> {/*permet de gerer le menu burger quand on diminue la taille du navigateur ps:voir les state ouvert plus haut*/}

<li>
<Link to="/">HOME</Link>
</li>
<li>
<Link to="/">ABOUT US</Link>
</li>
<li>
<Link to="/">PORTOFOLIO</Link>
</li>
<li>
<Link to="/">FEATURES</Link>
</li>
<li>
<Link to="/">BLOG</Link>
</li>
<li>
<Link to="/">SHOP</Link>
</li>
<li>
<Link to="/">CONTACT</Link>
</li>
<li>
<Link to="/"><FaSearch /></Link>
</li>
<li>
<Link to="/"><FaBabyCarriage /></Link>
</li>
</ul>

</div>

            </nav>
        )
        }  
}
