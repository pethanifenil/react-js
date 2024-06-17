import React from "react";
import styles from "../../../../styles/layout/subServices/paintWorking.module.css"
function HowItWorks(props) {
  return (
    <div>
      <h3 className={styles.title}>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default HowItWorks;
