import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
