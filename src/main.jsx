import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './page/Dashboard/Dashboard.jsx';
import Team from './page/Team/Team.jsx';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route index element={<Dashboard />} />
      <Route path='/team' element={<Team />} />


     </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>


    <RouterProvider router={router} />
   </React.StrictMode>
);