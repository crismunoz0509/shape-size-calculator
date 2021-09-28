import './App.css';
import Header from './components/Header';
import LengthByWidth from './components/LengthByWidth';

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <LengthByWidth />
      </div>
    </div>
  );
}

export default App;
