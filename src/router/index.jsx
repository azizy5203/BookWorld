import { createBrowserRouter } from "react-router-dom";

import Shop from "../views/Shop/Shop";
import NotFound from "../views/NotFound";
import DefaultLayout from "@/layouts/DefaultLayout";
import Books from "../views/Books";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Shop />,
        handle: {
          title: "Shop",
        },
      },
      {
        path: "/books",
        element: <Books />,
        handle: {
          title: "Books",
        },
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
