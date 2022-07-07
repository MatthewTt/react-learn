import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import countReducers from './reducers/count'
import personReducer from './reducers/person'

// 合并reducers
const allReducers = combineReducers({
  count: countReducers,
  personList: personReducer,
})
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
