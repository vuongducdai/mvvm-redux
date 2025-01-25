import { combineReducers } from 'redux';
import timerReducer from '../timer/timer';

const rootReducer = combineReducers({
  timer: timerReducer,
});

export default rootReducer;
