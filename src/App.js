import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import AccountProfile from './AccountProfile';
import AccountProvider from './AccountProvider';

function App() {
  return (
    <div className="container">
      <AccountProvider>
        <BrowserRouter>
          <NavBar />
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/account/profile" component={AccountProfile} />
        </BrowserRouter>
      </AccountProvider>
    </div>
  )
}

export default App;
