import React, { Component } from 'react';
import state from './state'

class ChatLog extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = state
    }

    componentDidMount () {
        document.addEventListener('stateChange', e => this.setState(e.detail))
    }

    chatDivs (chats) {
        var divs = chats.map(chat => {
            var userStyle = {
                color: this.state.colors[chat.user]
            }
            return (
                <div key={chat.id}>
                    <span style={userStyle}>{chat.user}</span>
                    <span>: </span>
                    <span>{chat.msg}</span>
                </div>
            )
        })
        return divs
    }

    render () {
        var chatLogStyle = {
           border: '1px solid lightgray',
           textAlign: 'left',
           padding: 15,
           height: window.innerHeight * .7
        }
        var chats = this.chatDivs(this.state.chats)
        return (
            <div style={chatLogStyle} className="ChatLog">
                {chats}
            </div>
        )
    }
}

export default ChatLog
