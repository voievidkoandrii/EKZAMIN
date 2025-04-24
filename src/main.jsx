import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ShapesLinePage from "./Pages/ShapesLinePage";
import { ShapesLineProvider } from "./context/ShapesLineContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/horisontal", // Горизонтальна сторінка
        element: <ShapesLinePage />,
      },
      {
        path: "/vertikal", // Вертикальна сторінка
        element: <ShapesLinePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShapesLineProvider>
      <RouterProvider router={router} />
    </ShapesLineProvider>
  </React.StrictMode>
);
