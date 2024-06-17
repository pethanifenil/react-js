import React from "react";
import SubWorkNavbar from "./SubWorkNavbar";
import { Outlet } from "react-router-dom";

function SubWorkLayout() {
  return (
    <div>
      <SubWorkNavbar />
      <Outlet />
    </div>
  );
}

export default SubWorkLayout;
