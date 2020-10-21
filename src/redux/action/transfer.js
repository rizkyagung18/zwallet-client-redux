import Axios from 'axios'
import { FORM_FILLED, TRANSFER_REQUEST, TRANSFER_SUCCESS, TRANSFER_FAILED } from '../type/transfer'

const URI = 'http://localhost:8000/api/v1'

export const formFilled = data => {
    return {
        type: FORM_FILLED,
        payload: data
    }
}

export const transferRequest = () => {
    return {
        type: TRANSFER_REQUEST
    }
}

export const transferSuccess = data => {
    return {
        type: TRANSFER_SUCCESS,
        payload: data
    }
}

export const transferFailed = data => {
    return {
        type: TRANSFER_FAILED,
        payload: data
    }
}

export const transfer = data => async dispatch => {
    dispatch(transferRequest())
    try {
        const res = await Axios.post(`${URI}/transfer`)
    } catch (error) {
        
    }
}