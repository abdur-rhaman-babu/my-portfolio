import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl lg:mx-auto mt-20 bg-zinc-50 lg:p-10 p-2 md:p-5 -z-50 min-h-[73vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
