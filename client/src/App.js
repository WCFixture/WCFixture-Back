
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Fixture from './Components/Fixture/Fixture';
import PickEm from './Components/Prode/PickEm';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/pickem" element={<PickEm />} />
    </Routes>
>>>>>>> Stashed changes
  );
}

export default App;
