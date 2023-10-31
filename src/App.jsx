import CallApi from "./Components/CallApi.jsx";
import Root from "./Components/Root.jsx";
import Profile from "./Components/Profile.jsx";
import Component from "./Components/Component.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

export default function App() {
  const RequireAuth = ({ children, redirectTo, user }) => {
    console.log(user);
    const isAuthenticated = user ? true : false;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },

        { path: "api", element: <CallApi /> },
        {
          path: "profile",
          element: (
            <RequireAuth redirectTo={"/"} user={true}>
              <Profile />
            </RequireAuth>
          ),
          children: [
            {
              path: "edit",
              element: (
                <div>
                  <h3>Edit Profile</h3>
                  <p>Edit me now</p>
                </div>
              ),
            },

            {
              path: "view",
              element: (
                <div>
                  <h3>View Profile</h3>
                  <p>View me now</p>
                </div>
              ),
            },
          ],
        },
        { path: "component", element: <Component /> },
      ],
    },
  ]);
  return (
    <>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </>
  );
}
