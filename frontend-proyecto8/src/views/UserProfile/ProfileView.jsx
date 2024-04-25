import React from "react";
import SidebarModal from "../../components/SidebarModal/SidebarModal";
import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";

const ProfileView = () => {
  return (
    <div className="d-flex">
      <div>
        <SidebarModal />
      </div>
      <div>{/* <AddProduct /> */}</div>
      <div>
        <UpdateProduct />
      </div>
    </div>
  );
}

export default ProfileView;
