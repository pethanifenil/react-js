import React from "react";
import Title from "../common/Title";
import styles from "../../styles/home/aboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutMainContainer}>
      <div className={styles.box}>
        <div>
          <Title title="About Us" />
        </div>
        <div className={styles.descContainer}>
          <p>
            The EcoMax is a revolutionary electric vehicle that combines
            cutting-edge technology with sleek design and exceptional
            performance. With a range of up to
            <span style={{ color: "red", fontSize: "1.2rem" }}>300 miles</span>
            on a single charge, this eco-friendly car is perfect for
            long-distance travel. Its sleek, aerodynamic design ensures minimal
            drag, resulting in impressive fuel efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
