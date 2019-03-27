import axios from 'axios'

export function submitSuccess(id) {
  return { type: 'SET_SUBMIT_SUCCESS', id }
}

export function submitError(error) {
  return { type: 'SET_SUBMIT_ERROR', error }
}

export const submitForm = (data) => dispatch => {
  axios.post('https://demo8409100.mockable.io/profile', {
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    country: data.country
  })
  .then(function (response) {
    console.log(response);
    dispatch(submitSuccess(response.data.id))
  })
  .catch(function (error) {
    console.log(error);
    dispatch(submitError(true))
  });
}
