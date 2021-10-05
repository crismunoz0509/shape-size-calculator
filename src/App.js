import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import SquareInputs from './components/SquareInputs';
import Outputs from './components/Outputs';
import SelectCalculator from './components/SelectCalculator';
import RectangleInputs from './components/RectangleInputs';

function App() {
  const [output, setOutputs] = useState([]);
  const [pageOpen, setPageOpen] = useState(false);

  const sqaureCalc = (length) => {
    let newOut = length * length
    setOutputs([...output, newOut])
  }

  const rectCalc = (length, width) => {
    let newOut = length * width
    setOutputs([...output, newOut])
  }

  const switchPageOpen = () => {
    if(pageOpen){
      setPageOpen(false);
    }else{
      setPageOpen(true);
    }
  }

  return (
    <Router>

      <div>
        <Header btnShow={pageOpen} switchBtn={switchPageOpen}/>
        <div className="body">
          <Route path="/select" render={() => (
            <SelectCalculator switchBtn={switchPageOpen}/>
          )}/>

          <Route path="/squareinput" render={() => (
            <SquareInputs onCalc={sqaureCalc} />
          )} />

          <Route path="/rectangleinput" render={() => (
            <RectangleInputs onCalc={rectCalc} />
          )} />

          <Outputs enterCalc={output[output.length - 1]} pastCalc={output} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;