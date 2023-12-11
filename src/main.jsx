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
import Invoices from "./page/Invoices/Invoices.jsx";
import Form from "./page/Form/Form.jsx";
import Contacts from "./page/Contacts/Contacts.jsx";
import FAQ from "./page/FAQ/FAQ.jsx";
import NotFoundpage from "./page/NotFoundpage/NotFoundpage.jsx";
import Updates from "./page/Updates/Updates.jsx";

import Pie from "./components/nivoCharts/Pie.jsx";
import Line from "./components/nivoCharts/Line.jsx";
import Barchart from "./components/nivoCharts/Barchart.jsx";
import Geography from "./components/nivoCharts/Geography/Geography.jsx";
import PrivateRoutes from "./provider/ProtectedProvider/PrivateRoutes.jsx";
import SignIn from "./page/AuthForms/SignIn.jsx";
import SignUp from "./page/AuthForms/SignUp.jsx";
import ForgotPassword from "./page/AuthForms/ForgotPassword.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route >

    <Route path="SignIn" element={<SignIn/>} />
    <Route path="SignUp" element={<SignUp/>} />
    <Route path="ForgotPassword" element={<ForgotPassword/>} />
    

    <Route path="/" element={<PrivateRoutes />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="Updates" element={<Updates />} />
       <Route path="nivoCharts">
        <Route path="bar" element={<Barchart />} />
        <Route path="line" element={<Line />} />
        <Route path="Pie" element={<Pie />} />
        <Route path="geography" element={<Geography />} />
      </Route>
      <Route path="*" element={<NotFoundpage />} />
    </Route>

   



    </Route>
  )

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
