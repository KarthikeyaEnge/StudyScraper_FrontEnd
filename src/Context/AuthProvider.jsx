import React from "react";
import { useContext, createContext, useState } from "react";
const AuthContext = createContext({});

const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [usr, setUsr] = useState("");
  return (
    <AuthContext.Provider value={{ usr, setUsr }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
