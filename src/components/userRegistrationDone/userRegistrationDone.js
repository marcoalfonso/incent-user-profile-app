import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import styles from './userRegistrationDone.module.css'

const UserRegistrationDone = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <div className={styles.title}>All set</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recent with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        <div className={styles.button}>
          <Link to="/">Done</Link>
        </div>
      </div>
    </section>
  )
}

export default reduxForm({
  form: 'user-registration-form',
  destroyOnUnmount: false
})(UserRegistrationDone)
