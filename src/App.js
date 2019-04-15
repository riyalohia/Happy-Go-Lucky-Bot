import React, { Component } from 'react';
import Header from './Header.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Footer from './Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Section1/>
          <Section2/>
          <Footer/>
      </div>
    );
  }
}

export default App;
