import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import styles from './userRegistrationDone.module.css'
import Navbar from '../../../components/navbar/navbar'
import Sidemenu from '../../../components/sidemenu/sidemenu'
import Container from '../../../components/container/container'
import CallToAction from '../../../components/callToAction/callToAction'

const UserRegistrationDone = (props) => {
  return (
    <div className={styles.flexForm}>
      <Navbar />
      <Sidemenu />
      <Container>
        <div className={styles.title}>All set</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        <CallToAction>
          <a href="/">Done</a>
        </CallToAction>
      </Container>
    </div>
  )
}

export default reduxForm({
  form: 'user-registration-form',
  destroyOnUnmount: false
})(UserRegistrationDone)
