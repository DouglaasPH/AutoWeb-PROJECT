import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import Login from "./pages/login/Login";
import FooterBar from "./components/footerBar/FooterBar";
import Carros from "./pages/carros/Carros";


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/">
      <Route index element={<> <NavBar /> <Home /> <FooterBar /> </>} />
      <Route path="login" element={<> <NavBar /> <Login /> </>} />
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
