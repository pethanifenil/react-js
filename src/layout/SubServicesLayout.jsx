import React from "react";
import SubServicesNavbar from "./SubServicesNavbar";
import { Outlet } from "react-router-dom";

function SubServicesLayout() {
  return (
    <div>
      <SubServicesNavbar />
      <Outlet />
    </div>
  );
}

export default SubServicesLayout;
