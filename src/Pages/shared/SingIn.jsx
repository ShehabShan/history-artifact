import singInLottieData from "../../assets/lotti/singin.json";
import successLottieData from "../../assets/lotti/succeess.json";
import Lottie from "lottie-react";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuthDetails from "../../Context/AuthContext/useAuthDetails";
import toast, { Toaster } from "react-hot-toast";

const SingIn = () => {
  const { user, singInUser } = useAuthDetails();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const hanldeUserSingin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await singInUser(email, password);

      navigate(from);

      toast.success("SignIn Successful");
      e.target.reset();
    } catch (error) {
      toast.error("Invalid email or password");
      //console.log(error);
      e.target.reset();
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          {user ? (
            <Lottie animationData={successLottieData}></Lottie>
          ) : (
            <Lottie animationData={singInLottieData}></Lottie>
          )}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Sing in!</h1>
          <form onSubmit={hanldeUserSingin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sing In"
                className="btn bg-blue-400 text-white"
              />
            </div>
            <div>
              <p>
                if you don't have a account? create one
                <span className=" text-blue-600 px-2">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
            <div className="divider">OR</div>
            <div className="mx-auto">
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
