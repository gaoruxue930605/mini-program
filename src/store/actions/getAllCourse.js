import { createAction } from 'redux-actions'
import { wePost } from '../../api/index'
import { GET_ALL_COURSE } from '../types/course'
export const getAllCourse = createAction(GET_ALL_COURSE, async (params) => {
  const { data } = await wePost('/wxapp/course', params)
  return data
})
