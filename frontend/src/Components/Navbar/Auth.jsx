import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const login = (newUsername) => setUsername(newUsername);

  const value = { username, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
