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
            setTimeout(() => this.setState({copied: false}), 1000)
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
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.copied ? 'Copied' : 'Copy'}</button>
                <hr />
            </div>
        )
    }
}

LinksListItem.propTypes = {
    url: React.PropTypes.string.isRequired,
    shortUrl: React.PropTypes.string.isRequired
}