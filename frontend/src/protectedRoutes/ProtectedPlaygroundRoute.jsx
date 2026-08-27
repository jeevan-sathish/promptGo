import LoginPage from "../pages/LoginPage";
const ProtectedPlaygroundRoute = ({ children }) => {
  const token = localStorage.getItem("pg_access_token");
  return token ? { children } : <LoginPage />;
};

export default ProtectedPlaygroundRoute;
