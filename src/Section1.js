import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './section1.css';

class Section1 extends Component {
  render() {
    return (
      <div className="Section1">
        <Carousel>
        <div className="slides">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        <div className="slides">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="slides">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </Carousel>
      </div>
    );
  }
}

export default Section1;
