import { useTimerViewModel } from '../timer/timer-view-model';

const PomodoroTimer = () => {
  const { start, pause, reset, mode, timeLeft, isRunning } =
    useTimerViewModel();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">
        {mode === 'work'
          ? 'Work Time'
          : mode === 'shortBreak'
            ? 'Short Break'
            : 'Long Break'}
      </h1>
      <div className="text-6xl font-mono mt-4">{formatTime(timeLeft)}</div>
      <div className="flex gap-4 mt-4">
        {isRunning ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={pause}
          >
            Pause
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={start}
          >
            Start
          </button>
        )}
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
