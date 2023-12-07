import React from "react";
import Main from "./pages/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
