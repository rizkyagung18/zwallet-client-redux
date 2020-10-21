import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = applyMiddleware(thunk, logger)
const store = createStore(persistedReducer, middleware)

const persistor = persistStore(store)

export { persistor, store }