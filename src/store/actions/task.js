import _ from 'lodash'
import moment from 'moment'
import { store } from '../index'

/*
 * action creators
 */

export const openTask = (obj) => {
  return {
    type: 'OPEN_TASK',
    obj
  }
}

export const selectTask = (obj) => {
  return {
    type: 'SELECT_TASK',
    obj
  }
}

export const addToDo = (obj) => {
  return {
    type: 'ADD_TODO',
    obj
  }
}

export const modifyToDo = (obj) => {
  return {
    type: 'MODIFY_TODO',
    obj
  }
}

export const deleteToDo = (obj) => {
  return {
    type: 'DELETE_TODO',
    obj
  }
}

export const addNewTask = (obj) => {
  return {
    type: 'ADD_NEWTASK',
    obj
  }
}

// export const saveToDo = (obj) => {
//   return {
//     type: 'SAVE_TODO',
//     obj
//   }
// }
