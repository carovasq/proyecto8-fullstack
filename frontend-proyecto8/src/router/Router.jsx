import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
// import Gallery from "../pages/Gallery";
// import UploadImage from "../pages/UploadImage";
// import EditImage from "../pages/EditImage";
// import ImageHandler from "../handler/ImageHandler";
// import DetailImage from "../pages/DetailImage";
import LoginView from "../views/Login/LoginView";
import HomeView from "../views/Home/HomeView"
import RegisterView from "../views/Register/RegisterView"
import ProfileView from "../views/UserProfile/ProfileView";
import ListView from "../views/Products/List";
import CreateView from "../views/Products/Create";
// import TourVirtual from "../views/TourVirtual/TourVirtual";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <HomeView />,
        // loader: fetchImages,
      },
      {
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/register",
        element: <RegisterView />,
      },
      {
        path: "/profile",
        element: <ProfileView />,
      },
      {
        path: "/list-productos",
        element: <ListView />,
      },
      {
        path: "/create-productos",
        element: <CreateView />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <LayoutPrivate />,
  //   children: [
  //     {
  //       index: true,
  //       element: <AdminView />,
  //       // loader: fetchImages,
  //     },
  //     {
  //       path: "/home",
  //       element: <HomeView />,
  //     },
  //   ],
  // },
]);

// async function fetchImages() {
//   const images = await ImageHandler.loadImages();
//   return { images };
// }

// async function fetchImage({ params }) {
//   const image = await ImageHandler.loadImage(params.imageName);
//   return { image };
// }
