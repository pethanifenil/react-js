import React from "react";
import Title from "../common/Title";
import styles from "../../styles/home/ourWork.module.css";

function OurWork() {
  return (
    <div>
      <div>
        <Title
          title="Our Work"
          subTitle="A collection of cars we've renovated with passion"
        />
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/RRP1.jpg" alt="" />
        <img src="/images/BMW01.jpg" alt="" />
        <img src="/images/bmwi7.jpg" alt="" />
        <img src="/images/car09.jpg" alt="" />
        <img src="/images/car07.jpg" alt="" />
        <img src="/images/car06.jpg" alt="" />
      </div>
    </div>
  );
}

export default OurWork;
