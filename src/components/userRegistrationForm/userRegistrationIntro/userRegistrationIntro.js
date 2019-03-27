import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/navbar/navbar'
import Container from '../../../components/container/container'
import Sidemenu from '../../../components/sidemenu/sidemenu'
import BackButton from '../../../components/backButton/backButton'
import CloseButton from '../../../components/closeButton/closeButton'
import CallToAction from '../../../components/callToAction/callToAction'
import styles from './userRegistrationIntro.module.css'

const UserRegistrationIntro = (props) => {
  const { handleSubmit } = props
  return (
    <form  className={styles.flexForm} onSubmit={handleSubmit}>
      <Navbar>
        <a href="/"><BackButton /></a>
        <a className={styles.absoluteRight} href="/"><CloseButton /></a>
      </Navbar>
      <Sidemenu />
      <Container>
        <div className={styles.body}>
          <div className={styles.title}>Introduction</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <CallToAction>
            <button type="submit" className="next">Next</button>
          </CallToAction>
        </div>
      </Container>
    </form>
  )
}

export default reduxForm({
  form: 'user-registration-form',
  destroyOnUnmount: false
})(UserRegistrationIntro)
