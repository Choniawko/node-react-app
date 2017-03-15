import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/new">New</Link>
    <Link to="/index">Index</Link>
  </nav>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
          <Links />
            <Route exact path="/" render={() => <p></p>} />
            <Route path="/new" render={() => <p>Add new element</p>} />
            <Route path="/index" render={() => <p>index elements</p>} />
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
