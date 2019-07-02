import React from 'react'
import { AccountConsumer } from './AccountProvider';

export default function AccountDetails() {
    return (
        <AccountConsumer>
            {account => (
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{account.username}</span>
                        <p>Date Joined: {account.dateJoined.toLocaleDateString()}</p>
                        <p>Membership Level: {account.membershipLevel}</p>
                    </div>
                </div>
            )}
        </AccountConsumer>
    )
}
