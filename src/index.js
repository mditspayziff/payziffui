import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Contactus from './screens/contact_us';
import HomePage from './screens/home_page';
import Welcome from './screens/welcom';
import TransactionServices from './screens/transactions';
import TransactionCard from './components/transaction_card';
import MerchantServices from './screens/merchant_services';
import AddNewVendor from './screens/add_new_vendor';






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index={true} element={<HomePage children={[<Welcome />]} />} />
      <Route index={false} path="contact" element={<Contactus />} />
      <Route index={false} path="merchants" element={<HomePage children={[<MerchantServices />]} />} />
      <Route index={false} path="addNewVendor" element={<HomePage children={[<AddNewVendor />]} />} />
      <Route index={false} path="transactions" element={<HomePage children={[<TransactionServices />]} />} />
    </Route>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
