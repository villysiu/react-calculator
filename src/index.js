import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TechSpec from './components/TechSpec';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tech-spec",
    element: <TechSpec />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);


