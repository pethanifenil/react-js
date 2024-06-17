import React from "react";
import styles from "../../styles/home/common/title.module.css";

function Title(props) {
  const { title, subTitle } = props;
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}

export default Title;
