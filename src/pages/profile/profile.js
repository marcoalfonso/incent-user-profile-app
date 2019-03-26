import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { userActions } from '../../actions/userActions';
import styles from './profile.module.css';

class Profile extends Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <nav className="nav">
            <Link to="/">Back</Link>
            <Link to="/">Close</Link>
          </nav>
        </header>
        <section className={styles.container}>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
