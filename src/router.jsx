// src/App.jsx
// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Favourite from "./Component/Favourite";
import Home from "./Pages/Home";
import Contact from "./Component/Contact";
import {  SignIn, SignUp} from "@clerk/clerk-react";
import Account from "./Pages/Account";
import DisplayAlbum from "./Component/DisplayAlbum";
import Playsongs from "./Component/Playsongs";


// Layout component


; // Only extract what you need

// Define the router with routes
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App />, // Layout that contains Outlet
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/displayalbum/:id",
        element:<DisplayAlbum/>
      },
      {
        path: "/favourite",
        element:  <Favourite />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/playsongs",
        element: <Playsongs />,
      },
      {
        path: "/account",
       element: <Account/>
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

// Main App Component
const Router = () => {
  

  
  return <RouterProvider router={router} />;

 
};


export default Router;
