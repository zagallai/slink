import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {
    render() {
        return (
            <div>
                <p>Link Component here</p>
                <button onClick={() => browserHistory.push('/')}>Logout</button>
            </div>
        )
    }
}