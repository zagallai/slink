import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
import shortid from 'shortid'

export const Links = new Mongo.Collection('links')

if (Meteor.isServer) {
    Meteor.publish('linksPub', function() {
        return Links.find({ userId: this.userId })
    })
}

Meteor.methods({
    'links.insert'(url) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized')
        }

        new SimpleSchema({
            url: {
                type: String,
                label: 'Your link is invalid',
                regEx: SimpleSchema.RegEx.Url
            }
        }).validate({ url })

        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId,
            visible: true
        })
    },
    'links.setVisibility'(_id, visible) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized')
        }

        new SimpleSchema({
            _id: { type: String, min: 1 },
            visible: { type: Boolean }
        }).validate({ _id, visible })

        Links.update({_id, userId: this.userId}, {$set: { visible }})
    }

})