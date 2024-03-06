import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterDetail from "./components/characterDetail";
import MundoDetail from "./components/mundoDetail";
import Characters from "./components/characters";
import NavBar from "./components/Navbar";
import Mundos from "./components/mundos";

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Characters />} />
         <Route path="/characters" element={<Characters />} />
         <Route path="/characters/:characterId" element={<CharacterDetail />} />
         <Route path="/mundos" element={<Mundos />} />
         <Route path="/mundos/:mundoId" element={<MundoDetail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;