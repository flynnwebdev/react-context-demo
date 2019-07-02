import React, { useState, useEffect } from 'react'

export default function AccountUpdate({ username, membershipLevel }) {
    const [state, setState] = useState({ username, membershipLevel })

    const updateUsername = (event) => {
        setState({ ...state, username: event.target.value })
    }

    const updateMembershipLevel = (event) => {
        setState({ ...state, membershipLevel: event.target.value })
    }

    useEffect(() => {
        console.log(state)
    })

    return (
        <div>
            <form>
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
        </div>
    )
}
