import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import Login from "./pages/login/Login";
import FooterBar from "./components/footerBar/FooterBar";
import Carros from "./pages/carros/Carros";
import RedefinirSenha from "./pages/login/redefinir-senha/RedefinirSenha";


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/">
      <Route index element={<> <NavBar /> <Home /> <FooterBar /> </>} />
      <Route path="login">
        <Route index element={<> <NavBar /> <Login /> </>} />
        <Route path="redefinir-senha" element={<> <NavBar /> <RedefinirSenha /> <FooterBar /> </>} />
      </Route>
      <Route path="carros" element={<> <NavBar /> <Carros /> </>} />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
