import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/home/home'
import Profile from './pages/profile/profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
