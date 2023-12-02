import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./route/Home";
import Contato from "./route/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contato /> },
    ],
  },
]);

import { ThemaProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemaProvider>
      <RouterProvider router={router} />
    </ThemaProvider>
  </React.StrictMode>
);
