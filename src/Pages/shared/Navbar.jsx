import { Link, NavLink } from "react-router-dom";
import useAuthDetails from "../../Context/AuthContext/useAuthDetails";

import logo from "../../assets/icon/logo2.jpg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, singOutUser } = useAuthDetails();
  console.log(user);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hanldeSingOut = () => {
    singOutUser()
      .then(() => {
        console.log("Successful Sing Out");
      })
      .catch((error) => {
        console.log("failed to sing out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArtifacts"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          All Artifacts
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/addArtifacts"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Add Artifacts
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to="/marketplace"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Marketplace
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const dropDown = (
    <>
      <li>
        <NavLink
          to="/myArtifacts"
          className="justify-between hover:bg-blue-100 transition-colors duration-300"
        >
          My Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/LikedArtifacts"
          className="hover:bg-blue-100 transition-colors duration-300"
        >
          Liked Artifacts
        </NavLink>
      </li>
      <li>
        <button
          onClick={hanldeSingOut}
          className="bg-[#345fe5] text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300 w-full text-left"
        >
          Sign Out
        </button>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-[#345fe5] to-[#345fe5] text-white shadow-lg  fixed w-full top-0 left-0 z-50">
      <div className="navbar px-4 py-3 max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              className="w-12 rounded-full shadow-md"
              src={logo || "/placeholder.svg"}
              alt="Logo"
            />
            <h3 className="text-2xl font-semibold ml-2 hidden sm:inline">
              Historical Artifacts Tracker
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-lg font-medium">{links}</ul>
        </div>

        <div className="navbar-end">
          {!user ? (
            <div className="space-x-4">
              <Link
                to="/singin"
                className="btn border-none bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <>
              <div id="profilePic" className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar border-2 border-blue-300 hover:border-blue-400 transition-all duration-300"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={user?.photoURL || "/placeholder.svg"}
                      className="object-cover"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
                >
                  {dropDown}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
