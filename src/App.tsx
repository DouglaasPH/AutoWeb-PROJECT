import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import NavBar from "./components/navBar/NavBar";
import LoginPage from "./pages/login/LoginPage.tsx";
import FooterBar from "./components/footerBar/FooterBar";
import CarrosPage from "./pages/carros/CarrosPage.tsx";
import RedefinirSenhaPage from "./pages/login/redefinir-senha/RedefinirSenhaPage.tsx";
import { login } from "./system/login.ts";
import VerificarCodigoPage from "./pages/login/redefinir-senha/verificar-código/VerificarCodigoPage.tsx";

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/">
      <Route index element={<> <NavBar /> <HomePage /> <FooterBar /> </>} />
      <Route path="login">
        <Route index element={<> <NavBar /> <LoginPage /> </>} />
        <Route path="redefinir-senha">
          <Route index element={<> <NavBar /> <RedefinirSenhaPage /> <FooterBar /> </>} />
          <Route path="verificar-codigo" element={<> <NavBar /> <VerificarCodigoPage /> <FooterBar /> </>} />
        </Route>
      </Route>
      <Route path="carros" element={<> <NavBar /> <CarrosPage /> </>} />
    </Route>
  </Route>
))

function App() {
  login();

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
