
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Components/Home/Home';
import Fixture from './Components/Fixture/Fixture';
import PickEm from './Components/Prode/PickEm';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/pickem" element={<PickEm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
