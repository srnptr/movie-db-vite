import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./components/Movie";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      children: [
        { path: "/", element: <Home />, index: true },
        { path: "movies/:id", element: <Movie /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
