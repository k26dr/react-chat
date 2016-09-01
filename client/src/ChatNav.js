import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
          <NavItem onClick={this.handleToggleUsers} href="#">Toggle Users</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default ChatNav;
