import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import validate from '../../components/utils/validate'
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
    <form onSubmit={handleSubmit}>
      <button type="button" className="previous" onClick={previousPage}>
        Back
      </button>
      <Link to="/">Close</Link>
      <div>
        <label>Country</label>
        <Field name="favoriteColor" component={renderCountriesSelector} />
      </div>
      <div>
        <label htmlFor="termsAndConditions">I agree to terms and conditions</label>
        <div>
          <Field
            name="termsAndConditions"
            id="termsAndConditions"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
