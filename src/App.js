import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components.jsx/Navbar";
import Footer from "./components.jsx/Footer";
import "./style.scss";
const Layout=()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/write",
        element:<Write/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
    ]
  },
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
]);
function App() {
  return (
    <div className="app">
      <div className="container">
       <RouterProvider router={router} />
      </div>
    </div>
      
  );
}

export default App;
