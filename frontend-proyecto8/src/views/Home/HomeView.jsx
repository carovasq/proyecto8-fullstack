import React from "react";
// import Carousel1 from "../../Carousel/Carousel";
// import Wishlist from "../../Wishlist/Wishlist";
// import "./Homeview.css";
import WallArt from "../../components/WallArtModal/WallArt"
import AllProducts from "../../components/AllProducts/AllProducts";
import Advantages from "../../components/Advantages/Advantages";

const HomeView = () => {
  return (
    <div>
      <WallArt />
      <AllProducts />
      <Advantages />
    </div>
  );
};

export default HomeView;