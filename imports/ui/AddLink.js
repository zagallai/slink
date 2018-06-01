import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Links } from './../api/links'

export default class AddLink extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        const url = this.refs.url.value.trim()
        if (url) {
            //Links.insert({ url, userId: Meteor.userId() })
            Meteor.call('links.insert', url)
            this.refs.url.value = ''
        }
    }
    render() {
        return (
            <div>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL" />
                    <button>Add Link</button>
                </form>
            </div>
        )
    }
}