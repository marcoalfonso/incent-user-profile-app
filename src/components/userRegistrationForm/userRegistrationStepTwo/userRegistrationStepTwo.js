import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import validate from '../../../components/utils/validate'
import styles from './userRegistrationStepTwo.module.css'
import Navbar from '../../../components/navbar/navbar'
import Sidemenu from '../../../components/sidemenu/sidemenu'
import Container from '../../../components/container/container'
import BackButton from '../../../components/backButton/backButton'
import CloseButton from '../../../components/closeButton/closeButton'
import CallToAction from '../../../components/callToAction/callToAction'

const countries = ['Australia', 'New Zeland', 'USA', 'Mexico', 'Canada']

const renderCountriesSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a country</option>
      {countries.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form className={styles.flexForm} onSubmit={props.handleSubmit}>
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
            <label>Country</label>
            <Field name="countries" component={renderCountriesSelector} />
          </div>
        </div>
        <div className="row text-left">
          <div className="col-xs-12 col-md-6">
            <label className={styles.selectLabel} htmlFor="termsAndConditions">
              <Field
                name="termsAndConditions"
                id="termsAndConditions"
                component="input"
                type="checkbox"
              />
              I agree to terms and conditions
            </label>
          </div>
          </div>
        <CallToAction>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </CallToAction>
      </Container>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
