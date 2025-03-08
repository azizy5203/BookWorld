import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home/Home";
import NotFound from "../views/NotFound";
import DefaultLayout from "@/layouts/DefaultLayout";



const router = createBrowserRouter([
 
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
