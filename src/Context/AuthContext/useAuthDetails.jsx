import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuthDetails = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuthDetails;
