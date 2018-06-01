import React from 'react'
import { Accounts } from 'meteor/accounts-base'

import { Links } from './../api/links'
import LinksList from './../ui/LinksList'

export default class Link extends React.Component {
    onLogout() {
        Accounts.logout()
    }
    onSubmit(e) {
        e.preventDefault()
        const url = this.refs.url.value.trim()
        if (url) {
            Links.insert({url})
            this.refs.url.value = ''
        }
    }
    render() {
        return (
            <div>
                <p>Your Links</p>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
                <LinksList/>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL" />
                    <button>Add Link</button>
                </form>
            </div>
        )
    }
}