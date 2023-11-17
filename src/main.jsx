import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./page/Dashboard/Dashboard.jsx";
import Team from "./page/Team/Team.jsx";
import Bar from "./page/Bar/Bar.jsx";
import Calendar from "./page/Calendar/Calendar.jsx";
import Pie from "./page/Pie/Pie.jsx";
import Invoices from "./page/Invoices/Invoices.jsx";
import Line from "./page/Line/Line.jsx";
import Geography from "./page/Geography/Geography.jsx";
import Form from "./page/Form/Form.jsx";
import Contacts from "./page/Contacts/Contacts.jsx";
import FAQ from "./page/FAQ/FAQ.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />

      <Route path="/team" element={<Team />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contacts" element={<Contacts />} />
       <Route path="/faq" element={<FAQ />} />
      <Route path="/form" element={<Form />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/line" element={<Line />} />
      <Route path="/pie" element={<Pie />} />
     </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
