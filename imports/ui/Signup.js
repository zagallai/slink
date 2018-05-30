import React from 'react'
import { Link } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()

        Accounts.createUser({email, password}, (error) => {
            console.log('signup callback', error)
        });
    }
    render() {
        return (
            <div>
                <h1>Join short link</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="name" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button>Create Account</button>
                </form>
                <Link to="/">Already have  an account?</Link>
            </div>
        )
    }
}