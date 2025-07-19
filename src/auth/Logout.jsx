// src/pages/admin/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authApi"; // adjust if needed

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout(); // Clear cookies/tokens
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        navigate("/", { replace: true }); // Redirect to home in all cases
      }
    };

    handleLogout();
  }, [navigate]);

  return null; // 🔇 No UI shown
};

export default Logout;
