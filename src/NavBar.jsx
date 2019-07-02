import React from 'react'
import { Link } from 'react-router-dom'
import { AccountConsumer } from './AccountProvider'

export default function NavBar() {
    return (
        <AccountConsumer>
            {account => (
                <div>
                    <Link className="waves-effect waves-light btn red" to="/">Home</Link>
                    <Link className="waves-effect waves-light btn blue" to="/account/profile">{account.username}</Link>
                </div>
            )}
        </AccountConsumer>
    )
}
