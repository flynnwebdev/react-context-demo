import React from 'react'

export default function AccountDetails({ username, dateJoined, membershipLevel }) {
    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{username}</span>
                <p>Date Joined: {dateJoined}</p>
                <p>Membership Level: {membershipLevel}</p>
            </div>
        </div>
    )
}
