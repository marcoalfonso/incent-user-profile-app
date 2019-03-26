import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../../actions/userActions'
import UserRegistrationForm from '../../components/userRegistrationForm/userRegistrationForm'
import styles from './profile.module.css'

class Profile extends Component {
  render() {
    return (
      <div>
        <section className={styles.container}>
          <UserRegistrationForm />
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
