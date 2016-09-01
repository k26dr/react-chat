import React, { Component } from 'react';
import state from './state'

class UserSidebar extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = state 
  }

  componentDidMount () {
    document.addEventListener('stateChange', e => this.setState(e.detail))
  }


  render() {
    var userDivs = this.state.users.map(user => {
        return (
            <div key={user}>{user}</div>
        )
    })

    var sidebarStyle = {
        textAlign: 'left',
        padding: 15,
        border: '1px solid lightgray'
    }
    var headerStyle = {
        marginTop:0
    }

    if (this.state.showUsers) {
        return (
            <div style={sidebarStyle} className="col-md-3 UserSidebar">
                <h3 style={headerStyle}>Users</h3>
                {userDivs}
            </div>
        );
    }
    else {
        return <div></div>
    }
  }
}

export default UserSidebar;
