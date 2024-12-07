import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import NavBar from "./components/navBar/NavBar";
import LoginPage from "./pages/login/LoginPage.tsx";
import FooterBar from "./components/footerBar/FooterBar";
import CarrosPage from "./pages/carros/CarrosPage.tsx";
import RedefinirSenhaPage from "./pages/login/redefinir-senha/RedefinirSenhaPage.tsx";
import VerificarCodigoPage from "./pages/login/redefinir-senha/verificar-código/VerificarCodigoPage.tsx";
import RegistrarPage from "./pages/login/criar-conta/RegistrarPage.tsx";
import CriarSenhaPage from "./pages/login/criar-conta/senhaPage/CriarSenhaPage.tsx";
import Background from "./components/telaDeFundo/Background.tsx";
import SenhaPage from "./pages/login/redefinir-senha/senha/SenhaPage.tsx";
import RedefinicaoDeSenhaSucessoPage from "./pages/login/redefinir-senha/senha/sucesso/RedefinicaoDeSenhaSucessoPage.tsx";


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/">
      <Route index element={<> <NavBar /> <HomePage /> <FooterBar /> </>} />

      <Route path="login">
        <Route index element={<> <NavBar /> <Background pageAtual="Login" /> <LoginPage /> <FooterBar /> </>} />
        <Route path="redefinir-senha">
          <Route index element={<> <NavBar /> <Background pageAtual="RedefinirSenha" /> <RedefinirSenhaPage /> <FooterBar /> </>} />
          <Route path="verificar-codigo" element={<> <NavBar /> <Background pageAtual="VerificarCodigo" /> <VerificarCodigoPage /> <FooterBar /> </>} />
          <Route path="senha">
            <Route index element={<> <NavBar /> <Background pageAtual="Senha" /> <SenhaPage />  <FooterBar />  </>} />
            <Route path="sucesso" element={<> <NavBar /> <Background pageAtual="RedefinicaoDeSenhaSucessoPage" /> <RedefinicaoDeSenhaSucessoPage /> <FooterBar />  </>} />
          </Route>

        </Route>

        <Route path="registrar">
          <Route index element={<> <NavBar /> <Background pageAtual="Registrar" /> <RegistrarPage /> <FooterBar /> </>} />
          <Route path="senha" element={<> <NavBar /> <Background pageAtual="Senha" /> <CriarSenhaPage /> <FooterBar />  </>} />
        </Route>

      </Route>

      <Route path="carros" element={<> <NavBar /> <CarrosPage /> </>} />

    </Route>
  </Route>
))

function App() {

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App