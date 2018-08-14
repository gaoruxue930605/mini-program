import { handleActions } from 'redux-actions'
import { GET_ALL_COURSE } from '../types/course'
export default handleActions({
  [GET_ALL_COURSE](state, action) {
    state = Object.assign(state, {
      list: action.payload
    })

    return {
      ...state
    }
  }
}, {list: []})
