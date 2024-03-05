import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: lazy(() => import("./pages/HomePage/HomePage")),
      },
      {
        path: "admin",
        element: lazy(() => import("./pages/Admin/Admin")),
      },
    ],
  },
]);
