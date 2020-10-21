import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, EMAIL_ACTIVE, PASSWORD_ACTIVE, EMAIL_NOT_ACTIVE, PASSWORD_NOT_ACTIVE, EYE_CLICK } from '../type/login'

const initialState = {
    token: '',
    isLogin: false,
    loading: false,
    error: '',
    isEmailActive: false,
    isPasswordActive: false,
    isEyeClick: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                loading: false,
                isLogin: true,
                error: ''
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload.data.message,
                loading: false,
                isLogin: false
            }
        case LOGOUT:
            return {
                ...state,
                token: '',
                isLogin: false,
                _persist: {
                    rehydrated: true,
                    version: -1
                }
            }
        case EMAIL_ACTIVE:
            return {
                ...state,
                isEmailActive: true
            }
        case PASSWORD_ACTIVE:
            return {
                ...state,
                isPasswordActive: true
            }
            case EMAIL_NOT_ACTIVE:
                return {
                    ...state,
                    isEmailActive: false
                }
            case PASSWORD_NOT_ACTIVE:
                return {
                    ...state,
                    isPasswordActive: false
                }
            case EYE_CLICK:
                return {
                    ...state,
                    isEyeClick: !state.isEyeClick
                }
        default:
            return state
    }
}

