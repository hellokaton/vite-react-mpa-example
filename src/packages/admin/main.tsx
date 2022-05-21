import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";

import '/src/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/admin" element={<App />} />
              <Route path="/admin/expenses" element={<Expenses />} />
              <Route path="/admin/invoices" element={<Invoices />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
