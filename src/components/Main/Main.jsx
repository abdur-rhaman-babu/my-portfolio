import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
