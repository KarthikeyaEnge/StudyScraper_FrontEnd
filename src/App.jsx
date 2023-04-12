import React from "react";
import { useState, useRef, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Components/Layout";
import Scrape from "./Components/Scrape";
import Invalid from "./Components/Invalid";
import Home from "./Components/Home";
import ResultsX from "./Components/ResultsX";
import Loading from "./Components/Loading";
function App() {
  const [resdata, setResdata] = useState(null);

  return (
    <>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />

            {/**Protected Routes */}

            <Route
              path="scrape"
              element={<Scrape setResdata={setResdata} resdata={resdata} />}
            />
            <Route path="results" element={<ResultsX list={resdata} />} />
            <Route path="*" element={<Invalid />} />
          </Route>
        </Routes>
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;
