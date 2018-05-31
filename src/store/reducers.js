import { combineReducers } from 'redux'
import _ from 'lodash'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import moment from 'moment'


function taskArray(state, action) {
  if(!state) { state = []}

  switch (action.type) {
    case 'ADD_NEWTASK':
      return [
        ...state,
        action.obj
      ]
    default:
      return state
  }
}

function taskToDos(state, action) {
  if(!state) state = []
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.obj
      ]
    case 'MODIFY_TODO':
      return _.map(state, item => {
        if(item.id === action.obj.id) return  action.obj
        return item
      })
    case 'DELETE_TODO':
      return _.filter(state, (item) => {
        if(item.id != action.obj.id)
          return true
      })
    /*case 'SAVE_TODO':
      return _.assign(state, (item) => {
          if(item.id != action.obj.id)
            return true
        })*/
    default:
      return state
  }
}

function taskSelected(state, action) {
  if(!state) state = {}
  switch (action.type) {
    case 'SELECT_TASK':
      return _.assign({}, state, action.obj)
    default:
      return state
  }
}

// function auth(state, action) {
//   if(!state) state = {}
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       return _.assign({}, state, {
//         token: action.obj.token,
//         user: action.obj.user
//       })
//     case 'LOG_ME_OUT':
//       return {}
//     default:
//       return state
//   }
// }

// configuro persistent reducer
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation', 'taskSelected'],
  stateReconciler: autoMergeLevel2
}

const txtPersistConfig = {
  key: 'messages',
  storage: storage,
  whitelist: ['messages'],
  stateReconciler: autoMergeLevel2
}

const theReducer = combineReducers({
  taskSelected,
  taskArray,
  taskToDos
})


export default persistReducer(rootPersistConfig, theReducer)
