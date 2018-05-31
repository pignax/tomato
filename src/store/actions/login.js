import { AsyncStorage } from 'react-native'
import config from '../../config/debug'

/*
 * action creators
 */
 // import queryString from 'query-string'


export const loginSuccess = (obj) => {
  return {
    type: 'LOGIN_SUCCESS',
    obj
  }
}
export const badCredential = (obj) => {
  return {
    type: 'BAD_CREDENTIALS',
    obj
  }
}

export const logmeout = (obj) => {
  return {
    type: 'LOG_ME_OUT',
    obj
  }
}

export const registered = (obj) => {
  return {
    type: 'REGISTERED',
    obj
  }
}

export const tryLogin = (params) => {
  var fd = new FormData()
  fd.append('email', params.email)
  fd.append('password', params.password)

  return function(dispatch) {
    return fetch(config.URLTOPOINT + '/auth_login', {
      method: 'post',
      body: fd
    }).then(res => {
      return res.json()
    }).then(json => {
      if(json.token) {
        AsyncStorage.setItem('auth', JSON.stringify(json))
        console.log(JSON.stringify(json))
        dispatch(loginSuccess(json))
      } else {
        console.log(json)
        // dispatch(badCredential({error: ''}))
      }
    }).catch(err => {

    })
  }
}


export const register = (params) => {
  var fd = new FormData()
  fd.append('email', params.email)
  fd.append('password', params.password)
  fd.append('name', params.name)

  return function(dispatch) {
    return fetch(config.URLTOPOINT + '/register', {
      method: 'post',
      body: fd
    }).then(res => {
      return res.json()
    }).then(json => {
      if(!json.error) {
        return json
        // dispatch(registered({registered:true}))
      }
    }).catch(err => {

    })
  }
}
