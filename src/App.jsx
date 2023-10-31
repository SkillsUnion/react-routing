import Navbar from "./Components/Navbar.jsx";
import CallApi from "./Components/CallApi.jsx";
import Root from "./Components/Root.jsx";
import Profile from "./Components/Profile.jsx";
import Component from "./Components/Component.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import User from "./Components/User";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export default function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <h1>Hello World</h1>
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "api",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <h1>Hello Api</h1>
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "profile",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <h1>Profile</h1>
  //       </div>
  //     ),
  //   },

  //   {
  //     path: "component",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <h1>Component</h1>
  //       </div>
  //     ),
  //   },
  // ]);

  // Nested routes in Root
  const RequireAuth = ({ children, redirectTo, user }) => {
    console.log(user);
    const isAuthenticated = user ? true : false;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       { path: "/", element: <Home /> },

  //       { path: "api", element: <CallApi /> },
  //       {
  //         path: "profile",
  //         element: (
  //           // <RequireAuth redirectTo={"/"} user={true}>
  //           <Profile />
  //           // </RequireAuth>
  //         ),
  //         children: [
  //           {
  //             path: "edit",
  //             element: (
  //               <div>
  //                 <h3>Edit Profile</h3>
  //                 <p>Edit me now</p>
  //               </div>
  //             ),
  //           },

  //           {
  //             path: "view",
  //             element: (
  //               <div>
  //                 <h3>View Profile</h3>
  //                 <p>View me now</p>
  //               </div>
  //             ),
  //           },
  //         ],
  //       },
  //       { path: "component", element: <Component /> },
  //     ],
  //   },
  // ]);

  // nest routes with createRoutesFromElements

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<CallApi />} />
        <Route
          path="/profile"
          element={
            // <RequireAuth redirectTo={"/"} user={false}>
            <Profile />
            // </RequireAuth>
          }
        >
          <Route
            path="edit"
            element={
              <div>
                <h3>Edit Profile</h3>
                <p>Edit me now</p>
              </div>
            }
          />
          <Route
            path="view"
            element={
              <div>
                <h3>View Profile</h3>
                <p>View me now</p>
              </div>
            }
          />
        </Route>
        <Route path="/component" element={<Component />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </>
  );
}
