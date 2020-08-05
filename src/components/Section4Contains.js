import React, { Component } from 'react'
import office from "../images/office.jpg";
export default class Section4Contains extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-6">
                  <h1>{this.props.mission}</h1>

                      <div className="mission">
                     <p><img src={office} className="float" /></p>
                     <p className="mission_text">Ceci est un texte de paragraphe, qui doit être écrit à la suite de l'image
                        mais qui l'"entourera" car l'image est flottante.<br />
                        Votre texte votre texte votre texte votre texte votre texte votre texte <br />
                        votre texte Votre texte votre texte votre texte votre texte votre texte <br />
                        votre texte Votre texte votre texte votre texte votre texte votre texte <br />
	                 </p>
                     <p class="dessous">lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </p>
                     </div>
                  </div>
                  
                  <div className="col-md-4">
                  <div className="faq">
                  <h1>{this.props.faq}</h1>
                  <div className="faq1">
                      <h6>How we can Enter Our Data?</h6>
                  </div>
                  <p className="faq2">Lore ipsumlorem Lore ipsumlorem Lore ipsumloremLore ipsumloremLore ipsumlorem Lore ipsumloremLore ipsumlorem</p>
                  <div className="faq3">
                      <h6>How we can Enter Our Data?</h6>
                  </div>
                  <div className="faq3">
                      <h6>How we can Enter Our Data?</h6>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-1"></div>


                </div>
            </div>
        )
    }
}
