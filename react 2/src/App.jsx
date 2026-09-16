import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./modules/Nav.jsx";
import Home from "./modules/Home.jsx";
import About from "./modules/About.jsx";
import Contact from "./modules/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Nav />
        <About />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <Nav />
        <Contact />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;