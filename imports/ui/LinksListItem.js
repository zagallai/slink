import { Meteor } from 'meteor/meteor'
import React from 'react'
import Clipboard from 'clipboard'
import moment from "moment"

export default class LinksListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
    }
    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy)
        this.clipboard.on('success', () => {
            this.setState({copied: true, copyText: 'Copied'})
            setTimeout(() => this.setState({copied: false}), 700)
        }).on('error', () => {
            alert('Unable to copy. Please manually copy the link')
        })
    }
    componentWillUnmount() {
        this.clipboard.destroy();
    }
    renderStats() {
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits'
        let visitedMessage = null

        if (typeof this.props.lastVisitedAt === 'number') {
            visitedMessage = `(visited ${ moment(this.props.lastVisitedAt).fromNow() })`
        }
        return <p>{this.props.visitedCount} - {visitMessage} {visitedMessage}</p>
    }
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                {this.renderStats()}
                <a href={this.props.shortUrl} target="_blank">Visit</a>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.copied ? 'Copied' : 'Copy'}</button>
                <button onClick={() => {
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
                }}>{this.props.visible ? 'Hide' : 'UnHide'}</button>
                <hr/>
            </div>
        )
    }
}

LinksListItem.propTypes = {
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired,
    shortUrl: React.PropTypes.string.isRequired,
    visitedCount: React.PropTypes.number.isRequired,
    lastVisitedAt: React.PropTypes.number
}