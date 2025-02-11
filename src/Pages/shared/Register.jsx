import Lottie from "lottie-react";
import registerLottieData from "../../assets/lotti/register.json";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthDetails from "../../Context/AuthContext/useAuthDetails";
import { toast } from "react-hot-toast";


const Register = () => {
  const { setUser, createUser, updateUserProfile } = useAuthDetails();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleUserRegistration = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordValidation.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    try {
      const response = await createUser(email, password);
      await updateUserProfile(name, photo);

      setUser({ ...response.user, photoURL: photo, displayName: name });

      toast.success("Signup Successful");

      navigate(from);
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Register!</h1>
          <form onSubmit={handleUserRegistration} className="card-body">
            {/* username */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>

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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn bg-blue-400 text-white"
              />
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="mx-auto">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
