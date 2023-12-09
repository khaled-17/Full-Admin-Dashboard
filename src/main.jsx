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
import Calendar from "./page/Calendar/Calendar.jsx";
import Pie from "./page/Pie/Pie.jsx";
import Invoices from "./page/Invoices/Invoices.jsx";
import Line from "./page/Line/Line.jsx";
import Geography from "./page/Geography/Geography.jsx";
import Form from "./page/Form/Form.jsx";
import Contacts from "./page/Contacts/Contacts.jsx";
import FAQ from "./page/FAQ/FAQ.jsx";
import Barchart from "./page/Barchart/Barchart.jsx";
import NotFoundpage from "./page/NotFoundpage/NotFoundpage.jsx";
import Updates from "./page/Updates/Updates.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />

      <Route path="team" element={<Team />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="form" element={<Form />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="Updates" element={<Updates />} />





      <Route path="nivoCharts" >
        <Route path="bar" element={<Barchart />} />
        <Route path="line" element={<Line />} />
        <Route path="Pie" element={<Pie />} />
        <Route path="geography" element={<Geography />} />
      </Route>





      <Route path="*" element={<NotFoundpage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
