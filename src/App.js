import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import SquareInputs from './components/SquareInputs';
import Outputs from './components/Outputs';
import SelectCalculator from './components/SelectCalculator';
import RectangleInputs from './components/RectangleInputs';
import CircleInputs from './CircleInputs';
import TriangleInputs from './components/TriangleInputs';

function App() {
  const [output, setOutputs] = useState([]);
  const [pageOpen, setPageOpen] = useState(true);

  const triangleCalc = (base, height) => {
    let newOut = (base * height) / 2
    setOutputs([...output, newOut.toFixed(2)])
  }

  const sqaureCalc = (length) => {
    let newOut = length * length
    setOutputs([...output, newOut])
  }

  const rectCalc = (length, width) => {
    let newOut = length * width
    setOutputs([...output, newOut])
  }

  const circleCalc = (radius) => {
    let newOut = (radius * radius) * Math.PI
    setOutputs([...output, newOut.toFixed(2)])
  }

  const switchPageOpen = () => {
    if(pageOpen){
      setPageOpen(false);
    }else{
      setPageOpen(true);
    }
  }

  const clearOutputs = () => {
    setOutputs([])
  }

    return (
    <Router>

      <div id="background">
        <Header btnShow={pageOpen} switchBtn={switchPageOpen}/>
        <div className="body">
          <Route path="/" render={() => ( 
            pageOpen ? <SelectCalculator switchBtn={switchPageOpen}/> : <></>
          )}/>

          <Route path="/squareinput" render={() => (
            <SquareInputs onCalc={sqaureCalc} />
          )} />

          <Route path="/rectangleinput" render={() => (
            <RectangleInputs onCalc={rectCalc} />
          )} />

          <Route path="/circleinput" render={() => (
            <CircleInputs onCalc={circleCalc} />
          )}/>

          <Route path="/triangleinput" render={() => (
            <TriangleInputs onCalc={triangleCalc} />
          )}/>

        {pageOpen ? <button id="clear-btn" className="back-btn" onClick={clearOutputs}>Clear Outputs</button>  : <> </>}

        <Outputs enterCalc={output[output.length - 1]} pastCalc={output} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;