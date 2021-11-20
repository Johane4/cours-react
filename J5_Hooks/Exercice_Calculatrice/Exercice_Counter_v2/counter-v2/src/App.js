import './App.css';
import { useState } from 'react';
import Counter from './components/Counter.js';

const App = () => {
  const [ display, setDisplay ] = useState(false);
  const toggle = () => {
      setDisplay(!display);
  }

  return (
      <div>
          <p><button onClick={toggle}>Toggle counter</button></p>
          {display && <Counter />}
      </div>
  );
}

export default App;
