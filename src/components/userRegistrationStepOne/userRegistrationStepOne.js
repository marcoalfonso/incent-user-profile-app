import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import styles from './userRegistrationStepOne.module.css'
import validate from '../../components/utils/validate'
import renderField from '../../components/utils/renderField'
import Container from '../../components/container/container'

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
    {touched && error && <span>{error}</span>}
  </div>
)
const UserRegistrationStepOne = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <nav className={`nav ` + styles.navbar}>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <Link to="/">Close</Link>
        </nav>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <div>
          <label>Gender</label>
          <Field name="favoriteColor" component={renderGenderSelector} />
        </div>
        <button type="submit" className="next">
          Next
        </button>
      </form>
    </Container>
  )
}

export default reduxForm({
  form: 'user-registration-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(UserRegistrationStepOne)
