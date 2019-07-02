import React, { useState, useEffect } from 'react'

export const AccountContext = React.createContext()
export const AccountConsumer = AccountContext.Consumer

export default function AccountProvider({ children }) {
    const [state, setState] = useState({
        username: 'Matt',
        dateJoined: new Date(),
        membershipLevel: 'Gold',
        updateAccount: (newAccount) => {
            setState({ ...state, ...newAccount })
        }
    })

    useEffect(() => {
        console.log(state)
    })

    return (
        <AccountContext.Provider value={state}>
            {children}
        </AccountContext.Provider>
    )
}
