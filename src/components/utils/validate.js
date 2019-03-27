const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.termsAndConditions) {
    errors.termsAndConditions = 'Required'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.countries) {
    errors.countries = 'Required'
  }
  return errors
}

export default validate
