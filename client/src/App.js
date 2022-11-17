import { Routes, Route, BrowserRouter } from "react-router-dom"
import Fixture from './Components/Fixture/Fixture';
import PickEm from './Components/Prode/PickEm';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Sidebar from "./Components/SideBar/Sidebar";
import { HStack} from '@chakra-ui/react'

function App() {
  return (

    <BrowserRouter>
      <HStack spacing='24px'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/pickem" element={<PickEm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HStack>
    </BrowserRouter>

  );
}

export default App;
