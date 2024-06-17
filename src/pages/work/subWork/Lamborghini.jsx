import React from "react";
import styles from "../../../styles/layout/subWork/lamborghini.module.css";

function Lamborghini(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <div>
          <img src={props.img} alt={props.alt} />
        </div>
        <div className={styles.descContainer}>
          <h3>{props.title}</h3>
          <h2>{props.price}</h2>
          <p>{props.desc}</p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Lamborghini;
