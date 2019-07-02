import React from 'react'
import AccountDetails from './AccountDetails';
import AccountUpdate from './AccountUpdate';

export default function AccountProfile({ account: { username, dateJoined, membershipLevel } }) {
    // const { username, dateJoined, membershipLevel } = account
    return (
        <div>
            <AccountDetails username={username} dateJoined={dateJoined.toLocaleDateString()} membershipLevel={membershipLevel} />
            <AccountUpdate username={username} membershipLevel={membershipLevel} />
        </div>
    )
}
