import './App.css';
import Counter from './components/counter';
import { CounterContextProvider } from './contexts/useCounter';

function App() {
  return (
    <CounterContextProvider>
    <div className="App">
      <Counter />
    </div>
    </CounterContextProvider>
  );
}

export default App;
