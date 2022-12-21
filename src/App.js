import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Sobre from "./paginas/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;