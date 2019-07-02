import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ username }) {
    return (
        <div>
            <Link className="waves-effect waves-light btn red" to="/">Home</Link>
            <Link className="waves-effect waves-light btn blue" to="/account/profile">{username}</Link>            
        </div>
    )
}
