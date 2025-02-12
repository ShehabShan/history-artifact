import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem] "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <div className="text-center">
          {/* <h1 className="text-2xl mx-4 lg:mx-6 font-semibold text-white lg:text-3xl">
            {text}
          </h1> */}
          <br />
          {/* <Link
            to="/addArtifacts"
            className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Post Artifacts & Hire Expert
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Slide;
