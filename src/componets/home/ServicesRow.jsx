import React from "react";
import styles from "../../styles/home/services.module.css";
import Services from "./Services";
import Title from "../common/Title";

function ServicesRow() {
  const data = [
    {
      title: "REPAIRS",
      desc: ["General Repairs,", "Specialist Repairs", "& Vintage Parts"],
    },
    {
      title: "UPHOLSTERY",
      desc: [
        "A Range of Fabrics",
        "Including Vintage Leathers,",
        "& Wide Variety of Colors",
      ],
    },
    {
      title: "PAINTWORK",
      desc: [
        "Spray paint, Custom",
        " Stencilling & Variety of Custom",
        "Made Artwork",
      ],
    },
  ];
  const componet = data.map((value, index) => {
    return <Services key={index} title={value.title} desc={value.desc} />;
  });
  return (
    <div>
      <div>
        <Title title="Services" />
      </div>
      <div className={styles.finalContainer}>{componet}</div>
    </div>
  );
}

export default ServicesRow;
