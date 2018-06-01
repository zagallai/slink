import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'
import { Mongo } from 'meteor/mongo'

import { routes, onAuthChange } from './../imports/routes/routes'

Tracker.autorun(() => {
    //double not to make sure truthy data
    const isAuthenticated = !!Meteor.userId()
    onAuthChange(isAuthenticated)
})

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'))
})
