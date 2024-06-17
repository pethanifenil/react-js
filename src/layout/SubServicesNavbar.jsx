import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layout/subServices/subServicesNavbar.module.css";

function SubServicesNavbar() {
  return (
    <nav className={styles.subServicesNavbar}>
      <ul className={styles.ulItems}>
        <li>
          <Link to="/subserviceslayout/repair">Repair</Link>
        </li>
        <li>
          <Link to="/subserviceslayout/upholstery">Upholstery</Link>
        </li>
        <li>
          <Link to="/subserviceslayout/paintworking">Paint Working</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubServicesNavbar;
