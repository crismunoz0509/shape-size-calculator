import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SquareInputs from './components/SquareInputs';
import Outputs from './components/Outputs';

function App() {

  const [output, setOutputs] = useState([]);

  const calculation = (length, width) => {

    let newOut = length * width
    setOutputs([...output, newOut])

  }

  return (
    <div>
      <Header />
      <div className="body">
        <SquareInputs onCalc={calculation} />
        <Outputs enterCalc={output[output.length - 1]} pastCalc={output} />
      </div>
    </div>
  );
}

export default App;