import React from "react";
import styles from "../../../styles/layout/subWork/mercedes.module.css";

function Mercedes(props) {
  return (
    <div>
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
    </div>
  );
}

export default Mercedes;
