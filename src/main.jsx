import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Accueil.jsx";
import Description2 from "./Description2.jsx";
import Amerique from "./amerique.jsx";
import Afrique from "./Afrique.jsx";
import Asie from "./Asie.jsx";
import Europe from "./Europe.jsx";
import DescriptionComplete from "./DescriptionComplete.jsx";
import Apropos from "./Apropos.jsx";
import { ContactUs } from "./Contact.jsx";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Accueil /> <Description2 />
          </>
        ),
      },
      {
        path: "/amerique",
        element: (
          <>
            <Amerique />
          </>
        ),
      },
      {
        path: "/europe",
        element :(
          <>
          <Europe/>
          </>
        )
      },
      {
        path: "/afrique",
        element: (
          <>
            <Afrique />
          </>
        ),
      },
      {
        path: "/asie",
        element: (
          <>
            <Asie/>
          </>
        ),
      },
      {
        path: "/apropos",
        element:(
          <>
          <Apropos/>
          </>
        )
      },
      {
        path: "/contact",
        element:(
          <>
          <ContactUs/>
          </>
        )
      },
      {
        path: "/description/:continent/:id",
        element:<><DescriptionComplete /></>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
