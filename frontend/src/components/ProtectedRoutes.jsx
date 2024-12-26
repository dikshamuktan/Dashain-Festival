import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
function ProtectedRoutes({ Component }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="justify-center items-center">Loading ...</div>;
  }
  console.log(isAuthenticated, loading);
  return isAuthenticated ? <Component /> : <Navigate to="/login " />;
}

export default ProtectedRoutes;
