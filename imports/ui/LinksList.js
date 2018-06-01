import React from 'react'
import { Tracker } from 'meteor/tracker'
import { Links } from './../../imports/api/links'
import { Meteor } from 'meteor/meteor'

export default class LinksList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
    }
    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('linksPub')
            const links = Links.find({}).fetch()
            this.setState({ links })
        })
    }
    componentWillUnmount() {
        this.linksTracker.stop()
        console.log('unmount links list')
    }
    renderLinksListItems() {
        return this.state.links.map((link) => {
            return <p key={link._id}>{link.url}</p>
        })
    }
    render() {
        return (
            <div>
                <p>Links List</p>
                <div>{this.renderLinksListItems()}</div>
            </div>
        )
    }
}