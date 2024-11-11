import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<NavBar />}>
      <Route index element={ <Home/> } />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
