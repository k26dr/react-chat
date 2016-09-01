import React, { Component } from 'react';
import state from './state'
import ChatNav from './ChatNav'

class About extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = state
  }

  componentDidMount () {
    document.addEventListener('stateChange', e => this.setState(e.detail))
  }

  render() {
    return (
        <div className="About">
            <ChatNav />
            <p>This is an about page</p>
        </div>
    );
  }
}

export default About;
