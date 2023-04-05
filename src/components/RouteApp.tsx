import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MapPage from "../pages/Map";
import BaseApp from "../pages/BaseApp";
import Tracking from "../pages/Chart/Tracking";
import Report from "../pages/Chart/Report";
import View from "../pages/View";
import Login from "../pages/Auth/Login";

export const RouteApp = () => {

  const router = createBrowserRouter([
    {
      element: <BaseApp />,
      children: [
        {
          path: "/",
          element: <MapPage />,
        },
        {
          path: "/analysis",
          element: <Tracking />,
        },
        {
          path: "/reports",
          element: <Report />,
        },
        {
          path: "/views",
          element: <View />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
  
}
