  import React from "react";
import styles from "../styles/home/footer.module.css"

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconContainer}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <p>&copy; 2024 by Jade & Andy. Powered and secured by Wix</p>
    </div>
  );
}

export default Footer;
