import { createContext, useContext, useEffect, useState } from "react";
import { getMe, login as loginApi, logout as logoutApi,getProfile } from "../services/authApi";
import { useQueryClient } from "@tanstack/react-query"; // Only for cache management if needed

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    const validateSession = async () => {
      try {
        // 1. First get basic user info (works for all roles)
        const res = await getMe();
        const userData = res.data.data;
        setUser(userData);

        // 2. If user is a student, fetch student profile
        if (userData.role === "student") {
          const profileRes = await getProfile();
          setStudent(profileRes.data.studentDetail);
        }
      } catch (error) {
        setUser(null);
        setStudent(null);
      } finally {
        setLoading(false);
      }
    };

    validateSession();
  }, []);

  const login = async (credentials) => {
    await loginApi(credentials);
    const res = await getMe();
    const userData = res.data.data;
    setUser(userData);

    if (userData.role === "student") {
      const profileRes = await getProfile();
      setStudent(profileRes.data.studentDetail);
    }

    return userData;
  };

  const logout = async () => {
    await logoutApi();
    localStorage.removeItem("authToken");
    setUser(null);
    setStudent(null);
    queryClient.clear();
  };

  return (
    <AuthContext.Provider value={{ user, student, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
