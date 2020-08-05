import React, { Component } from "react";
import { FaHome, FaHackerNews, FaSpaceShuttle } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHome />,
        title: "Services here",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaHackerNews />,
        title: "Services here",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaSpaceShuttle />,
        title: "Services here",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      
    ]
  };
  render() {
    return (
      <section className="services">
        <h1>{this.props.title}</h1>
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
