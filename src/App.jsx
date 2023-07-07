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
import Loginx from "./Components/Loginx";
import Profile from "./Components/Profile";
import PersistAuth from "./Components/PersistAuth";
import Instruct from "./Components/Instruct";
import { Toaster } from "react-hot-toast";

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
            <Route path="login" element={<Loginx />} />
            <Route path="instructions" element={<Instruct />} />
            <Route
              path="scrape"
              element={<Scrape setResdata={setResdata} resdata={resdata} />}
            />
            <Route
              path="results/:subject"
              element={
                <ResultsX
                  list={JSON.parse(sessionStorage.getItem("ocrres"))}
                  setResdata={setResdata}
                />
              }
            />

            {/* Presisted and protected route */}
            <Route element={<PersistAuth />}>
              <Route
                path="profile"
                element={
                  <Profile
                    userdata={JSON.parse(sessionStorage.getItem("userdata"))}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<Invalid />} />
        </Routes>
      </React.Suspense>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
