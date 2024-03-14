import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterDetail from "./components/characterDetail";
import MundoDetail from "./components/mundoDetail";
import Characters from "./components/characters";
import NavBar from "./components/Navbar";
import Mundos from "./components/mundos";

import PercentageBar from "./components/Percentagebar";
import PercentageBar2 from "./components/PercentageBar2";
import Form2 from "./components/form2";
import Acceder1 from "./components/Acceder1";
import Acceder2 from "./components/Acceder2";
import { useState } from "react";

import ImageViewer from "./components/ImageViewer";
import Timer from "./components/Counter";
import PasswordGen from "./components/PasswordGen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* {isLoggedIn ? <NavBar/> : null}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Characters /> : <Acceder1 />} />
          <Route path="/Acceder2" element={<Acceder2 onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:characterId" element={<CharacterDetail />} />
          <Route path="/mundos" element={<Mundos />} />
          <Route path="/mundos/:mundoId" element={<MundoDetail />} />
        </Routes>
      </BrowserRouter> */}
      <PasswordGen/>

    </div>
  );
}

export default App;