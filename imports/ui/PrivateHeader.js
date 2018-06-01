import React from 'react'
import { Accounts } from 'meteor/accounts-base'

const PrivateHeader = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <button onClick={() => Accounts.logout()}>Logout</button>
        </div>
    )
}

PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired
}

export default PrivateHeader