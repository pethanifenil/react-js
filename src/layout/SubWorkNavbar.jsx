import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layout/subWorkNavbar.module.css";

function SubWorkNavbar() {
  return (
    <nav className={styles.subWorkNavbar}>
      <ul className={styles.ulItems}>
        <li>
          <Link to="/subworklayout/bmw">BMW</Link>
        </li>
        <li>
          <Link to="/subworklayout/bugatti">ROLLS ROYEL</Link>
        </li>
        <li>
          <Link to="/subworklayout/ferrari">MUSTANG</Link>
        </li>
        <li>
          <Link to="/subworklayout/lamborghini">JAUGVAR</Link>
        </li>
        <li>
          <Link to="/subworklayout/mercedes">Mercedes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SubWorkNavbar;
