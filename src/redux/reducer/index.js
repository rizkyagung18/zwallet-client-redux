import { combineReducers } from 'redux'
import loginReducer from './login'
import registerReducer from './register'
import userReducer from './user'
import searchReducer from './search'
import topupReducer from './topup'

export default combineReducers({
    auth: loginReducer,
    register: registerReducer,
    user: userReducer,
    search: searchReducer,
    topup: topupReducer
})

