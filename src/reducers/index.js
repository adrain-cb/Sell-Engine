import { combineReducers } from 'redux'
import DataReducer from './data_reducer'

const rootReducer = combineReducers({
  data: DataReducer
})

export default rootReducer
