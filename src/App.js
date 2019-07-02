import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import AccountProfile from './AccountProfile';

const account = {
  username: 'Matt',
  dateJoined: new Date(),
  membershipLevel: 'Gold'
}

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar username={account.username} />
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route exact path="/account/profile" render={() => <AccountProfile account={account} />} />
      </BrowserRouter>
    </div>
  )
}

export default App;
