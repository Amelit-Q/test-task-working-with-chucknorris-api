import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Route path="/" component={Main} />
    </div>
  );
}

export default App;
