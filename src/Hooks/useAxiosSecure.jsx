import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthDetails from "../Context/AuthContext/useAuthDetails";

const axiosInstance = axios.create({
  baseURL: "https://artifacts-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { singOutUser } = useAuthDetails();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptors", error);

        if (error.status === 401 || error.status === 403) {
          singOutUser()
            .then(() => {
              console.log("logged out user");
              navigate("/signIn");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
