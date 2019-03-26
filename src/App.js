import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { userActions } from './actions/userActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.png'
import './App.css'
import Home from './pages/home/home'
import Profile from './pages/profile/profile'

class App extends Component {
  userAction = (event) => {
    this.props.userActions();
  }

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

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  userActions: () => dispatch(userActions())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
