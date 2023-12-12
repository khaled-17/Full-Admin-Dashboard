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
import ProtectedProvider from "./provider/ProtectedProvider/ProtectedProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route >

    <Route path="SignIn" element={<SignIn/>} />
    <Route path="SignUp" element={<SignUp/>} />
    <Route path="ForgotPassword" element={<ForgotPassword/>} />
    
     <Route path="/" element={<App />}>
      {/* <Route index element={<Dashboard />} /> */}
      <Route index element={<ProtectedProvider><Dashboard /></ProtectedProvider>} />
      <Route path="team" element={<ProtectedProvider> <Team /> </ProtectedProvider>} />
      <Route path="calendar" element={<ProtectedProvider> <Calendar /> </ProtectedProvider>} />
      <Route path="contacts" element={<ProtectedProvider><Contacts /></ProtectedProvider>} />
      <Route path="faq" element={<ProtectedProvider><FAQ /></ProtectedProvider>} />
      <Route path="invoices" element={<ProtectedProvider><Invoices /></ProtectedProvider>} />
      <Route path="Updates" element={<ProtectedProvider><Updates /></ProtectedProvider>} />
       <Route path="nivoCharts">
        <Route path="bar" element={<ProtectedProvider><Barchart /></ProtectedProvider>} />
        <Route path="line" element={<ProtectedProvider><Line /></ProtectedProvider>} />
        <Route path="Pie" element={<ProtectedProvider><Pie /></ProtectedProvider>} />
        <Route path="geography" element={<ProtectedProvider><Geography /></ProtectedProvider>} />
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
