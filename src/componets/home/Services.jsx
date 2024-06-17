import React from "react";
import styles from "../../styles/home/services.module.css";

function Services(props) {
  const { title, desc } = props;

  return (
    <>
      <div className={styles.servicesMainContainer}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={styles.listItems}>
          {desc.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
