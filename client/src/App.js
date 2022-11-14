
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Fixture from './Components/Fixture/Fixture';
import PickEm from './Components/Prode/PickEm';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/pickem" element={<PickEm />} />
    </Routes>

  );
}

export default App;
