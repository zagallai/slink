import React from 'react'

import PrivateHeader from './../ui/PrivateHeader'
import LinksList from './../ui/LinksList'
import AddLink from './../ui/AddLink'

export default () => {
    return (
        <div>
            <PrivateHeader title="Your Shortlinks Creator"/>
            <LinksList/>
            <AddLink />
        </div>
    )
}