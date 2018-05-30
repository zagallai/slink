import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker'

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const unauthenticatedPages = ['/', '/signup']
const authenticaticatedPages = ['/links']
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/links" component={Link} />
        <Route path="*" component={NotFound} />
    </Router>
);

Tracker.autorun(() => {
    //double not to make sure truthy data
    const isAuthenticated = !!Meteor.userId()
    const pathname = browserHistory.getCurrentLocation().pathname
    const isUnAuthenticatedPage = unauthenticatedPages.includes(pathname)
    const isAuthenticatedPage = authenticaticatedPages.includes(pathname)

    if (isUnAuthenticatedPage && isAuthenticated) {
        browserHistory.push('/links')
    }

    if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.push('/')        
    }

})

Meteor.startup(() => {
    ReactDom.render(routes, document.getElementById('app'));
});

