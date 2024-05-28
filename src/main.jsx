import React from "react";
import ReactDOM from "react-dom/client";
//routes
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//pages
import Search from "./routes/Search.jsx";
import Login from "./routes/Login.jsx";
import App from "./App.jsx";
import Register from "./routes/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/produtos" />,
  },
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/singup",
        element: <Register />,
      },
      {
        path: "/produtos",
        element: <Search />,
      },
      {
        path: "/singin",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("book-store")).render(
  <React.StrictMode>
    <Register/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
