import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TechStack from './components/TechStack';
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
    path: "/tech-stack",
    element: <TechStack />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);


