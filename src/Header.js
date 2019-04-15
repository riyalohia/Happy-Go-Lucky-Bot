import React, { Component } from 'react';
import {Navbar, Container} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <Container>
        <Navbar expand="lg" variant="light">
            <Navbar.Brand href="#home">LNMIIT</Navbar.Brand>
            <Navbar.Toggle />
        </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;
