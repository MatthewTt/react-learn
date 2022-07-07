import { DECREMENT, INCREMENT } from '../constants'

const initialState = 0
function count(preState = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case INCREMENT:
      return preState + parseInt(payload)
    case DECREMENT: // decrement by payload
      return preState - payload
    default:
      return preState
  }
}
  export default count
