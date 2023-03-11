import { useState, useRef, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Components/Layout";
import Scrape from "./Components/Scrape";
import Invalid from "./Components/Invalid";
import Home from "./Components/Home";

function App() {
  const login = useRef(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    login.current = loggedIn;
  }, [loggedIn]);
  return (
    <>
      <Header setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />

          {/**Protected Routes */}

          <Route path="scrape" element={<Scrape />} />
          <Route path="*" element={<Invalid />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
