import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    // Fetch the token from localStorage
    const storedToken = localStorage.getItem('token');

    // Decode the token if it exists
    if (storedToken) {
      const jwtDecoded = jwtDecode(storedToken);
      setDecodedToken(jwtDecoded);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ decodedToken, setDecodedToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
