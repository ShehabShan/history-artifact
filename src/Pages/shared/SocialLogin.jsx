import { useLocation, useNavigate } from "react-router-dom";
import useAuthDetails from "../../Context/AuthContext/useAuthDetails";

const SocialLogin = () => {
  const { singInWIthGoogle } = useAuthDetails();
  const navigate = useNavigate();
  const loaction = useLocation();
  const from = loaction.state || "/";

  const handleGoogleSingIn = () => {
    singInWIthGoogle().then(() => {
      //console.log(result.user);
      navigate(from);
    });
  };

  return (
    <div className="mb-3 ">
      <button
        onClick={handleGoogleSingIn}
        className="btn px-16 text-xl bg-blue-500 text-white"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
