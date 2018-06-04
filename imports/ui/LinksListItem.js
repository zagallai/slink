Meteor
import React from 'react'
import Clipboard from 'clipboard'

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
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.copied ? 'Copied' : 'Copy'}</button>
                <button onClick={() => {
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
                }}>{this.props.visible ? 'Hide' : 'UnHide'}</button>
            </div>
        )
    }
}

LinksListItem.propTypes = {
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired,
    shortUrl: React.PropTypes.string.isRequired
}