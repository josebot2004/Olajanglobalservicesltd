import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages & Layout
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";

// ------------------- Router Configuration -------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <Faq /> },
      {
        path: "*",
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-red-600">
              404 - Page Not Found
            </h1>
          </div>
        ),
      },
    ],
  },
]);

// ------------------- Render App -------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
