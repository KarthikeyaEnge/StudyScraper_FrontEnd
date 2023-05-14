import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useAuth } from "../Context/AuthProvider";
import CryptoJS from "crypto-js";
import { Navigate } from "react-router";
import axios from "axios";

const PersistAuth = () => {
  const { usr, setUsr, setUserdata } = useAuth();

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const reqdata = {
        UserName: sessionStorage.getItem("user"),
        Password: CryptoJS.AES.decrypt(
          sessionStorage.getItem("pass"),
          import.meta.env.VITE_PASS_KEY
        ).toString(CryptoJS.enc.Utf8),
      };

      axios.post("http://localhost:8081/validateCred", reqdata).then((res) => {
        if (res.status == 200) setUsr(sessionStorage.getItem("user"));
      });

      axios
        .post("http://localhost:3500/users/getdata", {
          user: sessionStorage.getItem("user"),
        })
        .then((res) => {
          sessionStorage.removeItem("userdata");
          sessionStorage.setItem("userdata", JSON.stringify(res.data));
          setUserdata(res.data);
        });
    }
  }, []);

  return usr ? <Outlet /> : <Navigate to="/login" />;
};

export default PersistAuth;
