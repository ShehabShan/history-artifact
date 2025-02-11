import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";

const MainLayout = () => {
  return (
    <div className=" mx-auto  bg-[#f2f4f8]">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-208px)] max-w-[1440px] mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
