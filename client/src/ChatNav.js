import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class ChatNav extends Component {
  handleToggleUsers () {
    document.dispatchEvent(new Event('toggleUsers'))
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Chat</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/">Chat</Link></NavItem>
          <NavItem onClick={this.handleToggleUsers}>Toggle Users</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default ChatNav;
