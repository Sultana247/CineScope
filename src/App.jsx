import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/movies",
        element: <Movies></Movies>
      }
    ]
  },
]);

function Router() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default Router
