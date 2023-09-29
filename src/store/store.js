import { combineReducers, createStore } from 'redux'
import { favReducer } from '../reducer/favReducer'

const rootReducer = combineReducers({
	favorite: favReducer
})

export const store = createStore(rootReducer)