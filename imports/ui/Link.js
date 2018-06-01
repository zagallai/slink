import React from 'react'
import { Accounts } from 'meteor/accounts-base'

import PrivateHeader from './../ui/PrivateHeader'
import LinksList from './../ui/LinksList'
import AddLink from './../ui/AddLink'

export default class Link extends React.Component {
    render() {
        return (
            <div>
                <PrivateHeader title="Your Shortlinks Creator"/>
                <LinksList/>
                <AddLink />
            </div>
        )
    }
}