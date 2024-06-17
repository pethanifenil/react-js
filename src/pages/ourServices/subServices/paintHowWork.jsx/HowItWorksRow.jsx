import React from "react";
import HowItWorks from "./HowItWorks";
import Title from "../../../../componets/common/Title";
import styles from "../../../../styles/layout/subServices/paintWorking.module.css";
import { homeServices } from "../../../../data/data";

function HowItWorksRow() {
  const compnet = homeServices.map((value, index) => {
    return <HowItWorks key={index} title={value.title} desc={value.desc} />;
  });
  return (
    <div>
      <div>
        <Title title="How It Works" />
      </div>
      <div className={styles.howWork}>{compnet}</div>
    </div>
  );
}

export default HowItWorksRow;
