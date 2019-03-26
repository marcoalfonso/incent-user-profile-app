export default (state = {}, action) => {
  switch (action.type) {
    case 'STEP_1':
    return {
      result: action.payload
    }
    default:
      return state
    }
}
