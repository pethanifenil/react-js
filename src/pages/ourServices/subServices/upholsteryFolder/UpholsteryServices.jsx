import React from "react";
import styles from "../../../../styles/layout/subServices/upholstery.module.css";

function UpholsteryServices(props) {
  const { img, title, desc } = props;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.descContainer}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button style={{ padding: "8px" }}>Enquire now</button>
      </div>
    </div>
  );
}

export default UpholsteryServices;
