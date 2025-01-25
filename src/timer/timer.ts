// timer/slice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const TIMER_SLICE_NAME = 'timerSlice';

export type TimerState = {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakAfter: number;
  timeLeft: number;
  isRunning: boolean;
  mode: 'work' | 'shortBreak' | 'longBreak';
  sessionCount: number;
};

const initialState = {
  workDuration: 25 * 60, // 25 minutes in seconds
  shortBreakDuration: 5 * 60, // 5 minutes in seconds
  longBreakDuration: 15 * 60, // 15 minutes in seconds
  longBreakAfter: 4, // 4 sessions
  timeLeft: 25 * 60, // Initial time for work duration
  isRunning: false,
  mode: 'work', // 'work', 'shortBreak', 'longBreak'
  sessionCount: 0, // Tracks number of completed sessions
};

const timerSlice = createSlice({
  name: TIMER_SLICE_NAME,
  initialState,
  reducers: {
    startTimer(state) {
      state.isRunning = true;
    },
    pauseTimer(state) {
      state.isRunning = false;
    },
    resetTimer(state) {
      state.timeLeft =
        state.mode === 'work'
          ? state.workDuration
          : state.mode === 'shortBreak'
            ? state.shortBreakDuration
            : state.longBreakDuration;
      state.isRunning = false;
    },
    decrementTime(state) {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
    switchMode(state) {
      if (state.mode === 'work') {
        state.sessionCount += 1;
        state.mode =
          state.sessionCount % state.longBreakAfter === 0
            ? 'longBreak'
            : 'shortBreak';
        state.timeLeft =
          state.mode === 'shortBreak'
            ? state.shortBreakDuration
            : state.longBreakDuration;
      } else {
        state.mode = 'work';
        state.timeLeft = state.workDuration;
      }
      state.isRunning = false;
    },
  },
});

export const { startTimer, pauseTimer, resetTimer, decrementTime, switchMode } =
  timerSlice.actions;
export default timerSlice.reducer;
