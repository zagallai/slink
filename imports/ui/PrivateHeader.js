import React from 'react'

export default class PrivateHeader extends React.Component {
    onLogout() {
        Accounts.logout()
    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
    }    
}

PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired
}