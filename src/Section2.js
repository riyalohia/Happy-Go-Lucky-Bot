import React, { Component } from 'react';
import './Section2.css';
import Image from 'react-bootstrap/Image';

class Section2 extends Component {
  render() {
    return (
      <div className="Section2">
        <div id="bloc1">
        <Image class="lightbox-false" alt="" title="" src="http://teenmentalhealth.org/wp-content/uploads/2014/04/Brain-Art-Project1.jpg.jpeg"/>
        </div>
        <div id="bloc2">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
        </div>
      </div>
    );
  }
}

export default Section2;
