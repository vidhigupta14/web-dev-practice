// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./modules/Home.jsx";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//   ]);
//   return (
//     <>
//       <div>
//         <h1>Hello, React!</h1>
//       </div>
//       <RouterProvider router={router} />
//     </>
//   );
// };

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/Home.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;