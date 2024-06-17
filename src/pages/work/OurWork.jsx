import React from "react";
import SubWorkNavbar from "../../layout/SubWorkNavbar";
import BmwRow from "./subWork/BmwRow";
import MercedesRow from "./subWork/MercedesRow";
import BuggatiRow from "./subWork/BuggatiRow";
import FerrariRow from "./subWork/FerrariRow";
import LemborghiniRow from "./subWork/LemborghiniRow";

function OurWork() {
  return (
    <div>
      <SubWorkNavbar />
      <button
        onClick=
        {function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style=
        {{
          marginTop: "35%",
          position: "absolute",
          marginLeft: "93%",
        }}
        ><i className="fa-solid fa-arrow-up"></i>
      </button>
      <BmwRow />
      <BuggatiRow />
      <FerrariRow />
      <LemborghiniRow />
      <MercedesRow />
    </div>
  );
}

export default OurWork;
