import Navbar from "./Components/Navbar.jsx";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <h1>Hello World</h1>
        </div>
      ),
    },
    {
      path: "api",
      element: (
        <div>
          <Navbar />
          <h1>Hello Api</h1>
        </div>
      ),
    },
    {
      path: "profile",
      element: (
        <div>
          <Navbar />
          <h1>Profile</h1>
        </div>
      ),
    },

    {
      path: "component",
      element: (
        <div>
          <Navbar />
          <h1>Component</h1>
        </div>
      ),
    },
  ]);
  return (
    <>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </>
  );
}
