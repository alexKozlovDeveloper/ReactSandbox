import { combineReducers } from 'redux'
import titleReducers from './titleReducers'
import moviesReducer from './moviesReducer'

export default combineReducers({
    titleReducers,
    moviesReducer
})