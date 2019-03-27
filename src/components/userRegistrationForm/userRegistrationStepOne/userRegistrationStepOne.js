import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import styles from './userRegistrationStepOne.module.css'
import Navbar from '../../../components/navbar/navbar'
import Sidemenu from '../../../components/sidemenu/sidemenu'
import validate from '../../../components/utils/validate'
import renderField from '../../../components/utils/renderField'
import Container from '../../../components/container/container'
import BackButton from '../../../components/backButton/backButton'
import CloseButton from '../../../components/closeButton/closeButton'
import CallToAction from '../../../components/callToAction/callToAction'

const gender = ['Male', 'Female']

const renderGenderSelector = ({ input, meta: { touched, error } }) => (

  <div>
    <select {...input}>
      <option value="">Your gender</option>
      {gender.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span className={styles.error}>{error}</span>}
  </div>
)
const UserRegistrationStepOne = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form className={styles.flexForm} onSubmit={handleSubmit}>
      <Navbar>
        <button type="button" className={styles.previous} onClick={previousPage}>
          <BackButton />
        </button>
        <a className={styles.absoluteRight} href="/"><CloseButton /></a>
      </Navbar>
      <Sidemenu />
      <Container>
        <div className={styles.title}>Complete your profile</div>
        <div className="row text-left mb-lg-4">
          <div className="col-xs-12 col-md-6">
            <Field
              name="firstName"
              type="text"
              component={renderField}
              label="First Name"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Field
              name="lastName"
              type="text"
              component={renderField}
              label="Last Name"
            />
          </div>
        </div>
        <div className="row text-left">
          <div className="col-xs-12 col-md-6">
            <label>Gender</label>
            <Field name="gender" component={renderGenderSelector} />
          </div>
        </div>
        <CallToAction>
          <button type="submit" className="next">
            Next
          </button>
        </CallToAction>
      </Container>
    </form>
  )
}

export default reduxForm({
  form: 'user-registration-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(UserRegistrationStepOne)
