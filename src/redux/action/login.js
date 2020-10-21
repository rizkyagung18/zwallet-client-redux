import Axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, EMAIL_ACTIVE, PASSWORD_ACTIVE, EMAIL_NOT_ACTIVE, PASSWORD_NOT_ACTIVE, EYE_CLICK } from '../type/login'

const URI = 'http://localhost:8000/api/v1'

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

export const emailActive = () => {
    return {
        type: EMAIL_ACTIVE
    }
}

export const passwordActive = () => {
    return {
        type: PASSWORD_ACTIVE
    }
}

export const emailNotActive = () => {
    return {
        type: EMAIL_NOT_ACTIVE
    }
}

export const passwordNotActive = () => {
    return {
        type: PASSWORD_NOT_ACTIVE
    }
}

export const eyeActive = () => {
    return {
        type: EYE_CLICK
    }
}