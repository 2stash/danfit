import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'
import { workoutListReducer } from './reducers/workoutReducers'


const reducer = combineReducers({
  workoutList: workoutListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store