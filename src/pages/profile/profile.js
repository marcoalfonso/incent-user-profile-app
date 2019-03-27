import React, { Component } from 'react'
import UserRegistrationForm from '../../components/userRegistrationForm/userRegistrationForm'
import styles from './profile.module.css'

class Profile extends Component {
  render() {
    return (
      <div>
        <section>
          <UserRegistrationForm />
        </section>
      </div>
    );
  }
}

export default Profile;
