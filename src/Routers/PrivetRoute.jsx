import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //console.log(location);

  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  return <Navigate to="/singin" state={location?.pathname}></Navigate>;
};

export default PrivetRoute;
