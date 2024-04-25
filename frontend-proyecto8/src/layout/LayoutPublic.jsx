import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LayoutPublic = () => {
  // const navigation = useNavigation()

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPublic;
