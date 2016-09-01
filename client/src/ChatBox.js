import React, { Component } from 'react';
import ChatLog from './ChatLog'
import ChatInput from './ChatInput'
import state from './state'

class ChatBox extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = state
  }

  componentDidMount () {
    document.addEventListener('stateChange', e => this.setState(e.detail))
  }

  render() {
    var className = "ChatBox "
    className += this.state.showUsers ? "col-md-9" : "col-md-12"
    return (
        <div className={className}>
            <ChatLog />
            <ChatInput />
        </div>
    );
  }
}

export default ChatBox;
