import React from "react";
import SubServicesNavbar from "../../layout/SubServicesNavbar";
import Repairs from "./subServices/Repairs";
import UpholsteryRow from "./subServices/upholsteryFolder/UpholsteryRow";
import PaintWorking from "./subServices/PaintWorking";

function OurServices() {
  return (
    <div>
      <SubServicesNavbar />
      <button
        onClick={function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{
          marginTop: "35%",
          position: "absolute",
          marginLeft: "93%",
        }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <div className="fenil">
      <Repairs />
      <UpholsteryRow />
      <PaintWorking />
      </div>
    </div>
  );
}

export default OurServices;
