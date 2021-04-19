import axios from 'axios'
import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER, USERS_LOADING } from './types'

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading())
    axios
      .get('/api/contact')
      .then(res => dispatch({
          type: GET_USERS,
          payload: res.data
      }))
}

export const addUser = user => dispatch => {
    axios
      .post('api/contact', user)
      .then(res => dispatch({
          type: ADD_USER,
          payload: res.data
      }))
}

export const deleteUser = id => dispatch => {
   axios
     .delete(`/api/contact/${id}`)
     .then(res => dispatch({
         type: DELETE_USER,
         payload: id
     }))
}

export const updateUser = id => dispatch => {
    axios
      .put(`/api/contact/${id}`)
      .then(res => dispatch({
          type: UPDATE_USER,
          payload: id
      }))
 }


export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}