import React, { Component } from 'react';
import $ from 'jquery'
import socket from './socket'
import state from './state'

class ChatInput extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = state
    }

    componentDidMount () {
        document.addEventListener('stateChange', e => this.setState(e.detail))
    }

    handleKeyDown (e) {
        if (e.keyCode === 13) {
            var msg = $("#chat-type").val()
            $("#chat-type").val('')
            console.log(msg)
            socket.emit('chat', {
                msg: msg,
                user: this.state.user
            })
        }
    }

    render () {
        var inputStyle = {
            width: '100%'
        }
        return (
            <div className="ChatInput">
                <input id="chat-type" style={inputStyle} 
                    onKeyDown={this.handleKeyDown.bind(this)}
                    placeholder="Type here..." />
            </div>
        )
    }
}

export default ChatInput
