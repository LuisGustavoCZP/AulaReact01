import { useState } from 'react';
import './App.css';
import Header from './components/header';

function App() {
  const [count, setCount] = useState(0);
  function funcaodobotao ()
  {
    setCount(count+1)
  }

  return (
    <div className="App">
      <Header title={count} />
      <input type="button" value="Click Me!" onClick={funcaodobotao} />
    </div>
  );
}

export default App;
