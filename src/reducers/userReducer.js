const initialState = {
  error: '',
  id: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBMIT_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'SET_SUBMIT_SUCCESS':
      return {
        ...state,
        id: action.id
      }
    default:
      return state
  }
}

export default userReducer
