import React, { useState, useEffect, useContext } from 'react'
import { AccountConsumer, AccountContext } from './AccountProvider';

export default function AccountUpdate() {
    const context = useContext(AccountContext)
    const { username, membershipLevel } = context

    const [state, setState] = useState({ username, membershipLevel })

    const updateUsername = (event) => {
        setState({ ...state, username: event.target.value })
    }

    const updateMembershipLevel = (event) => {
        setState({ ...state, membershipLevel: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        context.updateAccount(state)
    }

    return (
        <AccountConsumer>
            {account => (
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">New Username</label>
                    <input type="text" name="username" value={state.username} onChange={updateUsername} />
                    <div className="input-field">
                        <select name="membershipLevel" value={state.membershipLevel} onChange={updateMembershipLevel}>
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                        </select>
                        <label htmlFor="membershipLevel">Membership Level</label>
                    </div>
                    <button>Save</button>
                </form>
            )}
        </AccountConsumer>
    )
}
