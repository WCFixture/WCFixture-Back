import { Routes, Route, BrowserRouter } from "react-router-dom"
import Fixture from './Components/Fixture/Fixture';
import PickEm from './Components/Prode/PickEm';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/pickem" element={<PickEm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
