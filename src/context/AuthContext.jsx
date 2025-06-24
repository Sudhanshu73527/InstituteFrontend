import { createContext, useContext, useEffect, useState } from "react";
import { getMe, login as loginApi, logout as logoutApi } from "../services/authApi";
import { useQueryClient } from "@tanstack/react-query"; // Only for cache management if needed

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    const validateSession = async () => {
      try {
        const res = await getMe();
        setUser(res.data.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    validateSession();
  }, []);

  const login = async (credentials) => {
    await loginApi(credentials);
    const res = await getMe();
    setUser(res.data.data);

    return res.data.data;
  };

  const logout = async () => {
    await logoutApi();
    localStorage.removeItem('authToken');
    setUser(null);
    queryClient.clear(); // If you need to clear any cached data
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
