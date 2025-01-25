import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import PomodoroTimer from '../ui/PomodoroTimer';
import { Provider } from 'react-redux';
import reduxStore from '../redux/store';

function Hello() {
  return (
    <div>
      <PomodoroTimer />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </Provider>
  );
}
