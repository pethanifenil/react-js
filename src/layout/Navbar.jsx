import React from "react";
import styles from "../styles/home/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className={styles.container}>
        <h2>Logo</h2>
        <ul className={styles.ulItems}>
          <li>
            {/* <a href="#">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="#">Services</a> */}
            <Link to="/ourServices">Services</Link>
          </li>
          <li>
            {/* <a href="#">Our Work</a> */}
            <Link to="/ourWork">Our Work</Link>
          </li>
          <li>
            {/* <a href="#">About Us</a> */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <a href="#">About Us</a> */}
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
