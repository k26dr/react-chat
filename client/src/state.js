import socket from './socket'

var state = {
    user: 'user' + Math.floor(Math.random()*10000),
    chats: [],
    users: [],
    colors: {},
    showUsers: true
}

socket.on('chat', chat => {
    state.chats.push(chat)

    if (state.users.indexOf(chat.user) === -1) {
        state.users.push(chat.user)
        state.colors[chat.user] = randomHex()
    }

    dispatch()
})

document.addEventListener('toggleUsers', function () {
    state.showUsers = !state.showUsers
    dispatch()
})

function dispatch () {
    var event = new CustomEvent('stateChange', { detail: state })
    document.dispatchEvent(event)
}

function randomHex () {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

export default state
