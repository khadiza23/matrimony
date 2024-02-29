import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Homepage/Home";

import BioDatas from "./pages/BioDatas/BioDatas";
import Details from "./pages/BioDataDetails/Details";
import Login from "./Components/Login";
import App from "./App";
import CreateBiodata from "./Components/CreateBiodata";
import PaymentMethod from "./pages/payment/PaymentMethod";
import ConfirmPayment from "./pages/payment/ConfirmPayment";
import FullBioData from "./pages/FullBiodata/FullBioData";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-biodata",
        element: <CreateBiodata />,
      },
      {
        path: "/biodatas",
        element: <BioDatas />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "/payment",
        element: <PaymentMethod />,
      },
      {
        path: "/confirmation",
        element: <ConfirmPayment />,
      },
    ],
  },
  {
    path: "/contact-info",
    element: <FullBioData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
