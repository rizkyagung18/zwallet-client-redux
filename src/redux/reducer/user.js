import { GET_USER, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILED, USER_LOGOUT } from '../type/user'

const initialState = {
    data: [],
    loading: false,
    messageEdit: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                data: action.payload.data[0]
            }
        case EDIT_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                messageEdit: action.payload.message,
                data: action.payload.data
            }
        case EDIT_USER_FAILED:
            return {
                ...state,
                loading: false,
                messageEdit: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                data: []
            }
        default:
            return state
    }
}