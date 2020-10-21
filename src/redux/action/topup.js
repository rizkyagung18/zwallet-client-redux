import axios from 'axios'
import { TOPUP } from '../type/topup'

const URL = 'http://localhost:8000/api/v1'

export const topup = (token) => async dispatch => {
    const res = await axios.get(`${URL}/topup`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: TOPUP, payload: res.data })
}
