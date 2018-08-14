import { combineReducers } from 'redux'
import counter from './counter'
import allCourse from './getAllCourse'

export default combineReducers({
  counter,
  allCourse
})
