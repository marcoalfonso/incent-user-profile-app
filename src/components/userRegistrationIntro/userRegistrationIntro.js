import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import Container from '../../components/container/container'
import Sidemenu from '../../components/sidemenu/sidemenu'
import BackButton from '../../components/backButton/backButton'
import CloseButton from '../../components/closeButton/closeButton'
import styles from './userRegistrationIntro.module.css'

const UserRegistrationIntro = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Navbar>
        <Link to="/"><BackButton /></Link>
        <Link className={styles.absoluteRight} to="/"><CloseButton /></Link>
      </Navbar>
      <Sidemenu />
      <Container>
        <div className={styles.body}>
          <div className={styles.title}>Introduction</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recent with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <button className={styles.button} type="submit" className="next">Next</button>
        </div>
      </Container>
    </form>
  )
}

export default reduxForm({
  form: 'user-registration-form',
  destroyOnUnmount: false
})(UserRegistrationIntro)
