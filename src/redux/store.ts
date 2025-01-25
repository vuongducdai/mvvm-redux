import { combineReducers, configureStore } from '@reduxjs/toolkit';
import timerReducer from '../timer/timer'

const combinedReducers = combineReducers({
  timer: timerReducer
})

const store = configureStore({
  reducer: combinedReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;

export default store;
