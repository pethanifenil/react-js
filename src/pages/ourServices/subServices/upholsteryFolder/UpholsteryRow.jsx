import React from "react";
import UpholsteryServices from "./UpholsteryServices";
import styles from "../../../../styles/layout/subServices/upholstery.module.css";
import Title from "../../../../componets/common/Title";
import { upholsteryRow } from "../../../../data/data";

function UpholsteryRow() {
  // const data = [
  //   {
  //     img: "",
  //     title: "",
  //     desc: "",
  //   },
  //   {
  //     img: "",
  //     title: "",
  //     desc: "",
  //   },
  //   {
  //     img: "",
  //     title: "  ",
  //     desc: "",
  //   },
  //   {
  //     img: "",
  //     title: "",
  //     desc: "",
  //   },
  // ];

  const componet = upholsteryRow.map((value, index) => {
    return (
      <UpholsteryServices
        key={index}
        img={value.img}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div>
      <div style={{background : "#eeeeee"}}>
        <Title title="Upholstery" />
      </div>
      <div className={styles.finalContainer}>{componet}</div>
    </div>
  );
}

export default UpholsteryRow;
