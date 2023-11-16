import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [startDecodeToken, setStartDecodeToken] = useState(false);

  const [decodedToken, setDecodedToken] = useState(null);

  const [axiosHeaders, setAxiosHeaders] = useState();

  useEffect(() => {
    // Fetch the token from localStorage
    const storedToken = localStorage.getItem('token');

    // Decode the token if it exists
    if (storedToken) {
      const jwtDecoded = jwtDecode(storedToken);
      setDecodedToken(jwtDecoded);
      setAxiosHeaders({
        headers: {
          'Authorization': `Bearer ${storedToken}`
        },
      })
    }

    setStartDecodeToken(false);
  }, [startDecodeToken]);


  return (
    <AuthContext.Provider value={{ decodedToken, setDecodedToken, setStartDecodeToken, axiosHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
