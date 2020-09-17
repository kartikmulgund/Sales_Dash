import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

let devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = (a) => a
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), devTools)
  )
  return store
}
