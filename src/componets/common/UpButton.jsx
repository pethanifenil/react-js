import React from "react";
import styles from "../../styles/home/common/upButton.module.css";

function UpButton() {
  function upBtn() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={styles.upButton}>
      <button onClick={upBtn}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default UpButton;
