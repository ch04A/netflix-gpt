import React from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";
// import { PhoneAuthCredential } from "firebase/auth/web-extension";

export const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
