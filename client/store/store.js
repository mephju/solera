import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers.js'

const initialState = {
  basket: [],
  total: {gross: 0, net: 0, discount: 0}
}

export const types = {
  addProduct: 'addProduct',
  removeProduct: 'removeProduct',
}




// REDUCERS
export const reducer = (state = initialState, action) => {

  console.debug('reducer', action)
  const actionReducer = reducers[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

// ACTIONS
export const addProduct = (product) => dispatch => {
  return dispatch({ type: types.addProduct, product })
}

export const removeProduct = product => dispatch => {
  return dispatch({ type: types.removeProduct, product})
}

export const initStore = (initialState = initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}