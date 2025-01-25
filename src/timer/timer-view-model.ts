// timer/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import {
  decrementTime,
  switchMode,
  startTimer,
  pauseTimer,
  resetTimer,
} from './timer';

export const useTimerViewModel = () => {
  const dispatch = useDispatch();
  const { timeLeft, isRunning, mode } = useSelector(
    (state: RootState) => state.timer,
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isRunning) {
      timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }

    if (timeLeft === 0) {
      dispatch(switchMode());
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft, dispatch]);

  const start = () => {
    dispatch(startTimer());
  };

  const pause = () => {
    dispatch(pauseTimer());
  };

  const reset = () => {
    dispatch(resetTimer());
  };

  return { start, pause, reset, mode, timeLeft, isRunning};
};
