import Axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../type/login'
import { URI } from '../../utils'

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = token => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginFailed = error => {
    return {
        type: LOGIN_FAILED,
        payload: error
    }
}

export const login = data => async dispatch => {
    dispatch(loginRequest())
    try {
        const res = await Axios.post(`${URI}/auth/login`, data)
        dispatch(loginSuccess(res.data.data.token))
    } catch (error) {
        dispatch(loginFailed(error.response))
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}