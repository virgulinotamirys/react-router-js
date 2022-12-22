import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import Sobre from "./paginas/Sobre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path="sobre" element={<Sobre/>}/>
        </Route>
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;