import React from "react";
import { useState, useRef, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Components/Layout";
import Scrape from "./Components/Scrape";
import Invalid from "./Components/Invalid";
import Home from "./Components/Home";
import Results from "./Components/Results";
import Loading from "./Components/Loading";
function App() {
  const login = useRef(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    login.current = loggedIn;
  }, [loggedIn]);
  return (
    <>
      <Header setLoggedIn={setLoggedIn} />
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />

            {/**Protected Routes */}

            <Route path="scrape" element={<Scrape />} />
            <Route path="results" element={<Results />} />
            <Route path="*" element={<Invalid />} />
          </Route>
        </Routes>
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;
