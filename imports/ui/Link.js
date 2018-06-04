import React from 'react'

import PrivateHeader from './../ui/PrivateHeader'
import LinksList from './../ui/LinksList'
import AddLink from './../ui/AddLink'
import LinksListFilters from './../ui/LinksListFilters'

export default () => {
    return (
        <div>
            <PrivateHeader title="Your Shortlinks Creator"/>
            <LinksListFilters />
            <LinksList/>
            <AddLink />
        </div>
    )
}