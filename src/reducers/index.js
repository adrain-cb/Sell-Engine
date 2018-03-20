import { combineReducers } from 'redux';
import DataReducer from './data_reducer'

const rootReducer = combineReducers({
  ebayData: DataReducer
});

export default rootReducer;
