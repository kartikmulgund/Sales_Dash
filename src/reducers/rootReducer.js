import { combineReducers } from 'redux'
import customersReducer from './customersReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  customersData: customersReducer,
  modal: modalReducer,
})

export default rootReducer
