import Axios from 'axios'
import { GET_USER, GET_HISTORY, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILED, USER_LOGOUT } from '../type/user'

const URI = 'http://localhost:8000/api/v1'

export const getUser = token => async dispatch => {
    const res = await Axios.get(`${URI}/users/login`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_USER, payload: res.data })
}

export const getHistory = token => async dispatch => {
    const res = await Axios.get(`${URI}/transfer/history`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_HISTORY, payload: res.data })
}

export const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST
    }
}

export const editUserSuccess = data => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: data

    }
}

export const editUserFailed = error => {
    return {
        type: EDIT_USER_FAILED,
        payload: error
    }
}

export const editUser = (data, token) => async dispatch => {
    dispatch(editUserRequest())
    try {
        const res = await Axios.patch(`${URI}/users`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(editUserSuccess(res.data))
    } catch (error) {
        dispatch(editUserFailed(error.message))
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}