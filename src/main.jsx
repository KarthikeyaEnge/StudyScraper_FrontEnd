import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/* import "./index.css"; */
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Signin from "./Components/Signin";
import Scrape from "./Components/Scrape";
import UserAuth from "./middleware/UserAuth";
import Invalid from "./Components/Invalid";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Public Routes */}
          <Route index element={<Layout />} />
          <Route path="/signin" element={<Signin />} />

          {/**Protected Routes */}

          <Route element={<UserAuth />}>
            <Route path="/scrape" element={<Scrape />} />
          </Route>
        </Route>

        <Route path="/*" element={<Invalid />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
