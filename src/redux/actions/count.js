import { DECREMENT, INCREMENT } from '../constants'

const createIncrementAction = (payload) => ({ type: INCREMENT, payload })
const createDecrementAction = (payload) => ({ type: DECREMENT, payload })

// 异步action
const createIncrementAsyncAction = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(createIncrementAction(payload))
  }, 1000)
}

export { createIncrementAction, createDecrementAction, createIncrementAsyncAction }
