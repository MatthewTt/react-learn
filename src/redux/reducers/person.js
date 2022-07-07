import { ADD_PERSON } from '../constants'

const initialState = [{
  id: 1,
  name: '张三',
  age: 18,
}]
export default function personReducer(preState = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...preState, action.payload]
    default:
      return preState
  }
}
