import React from "react";
import styles from "../../../styles/layout/subServices/repair.module.css";
import Title from "../../../componets/common/Title";
import HowItWorksRow from "./paintHowWork.jsx/HowItWorksRow";

function Repairs() {
  return (
    <div style={{background : "#eeeeee"}}>
      <Title title="Repair Your Car"/>
      <div className={styles.paintMainContainer}>
        <div className={styles.descContainer}>
          <h2>Engiene Repair Services</h2>
          <p>
            The repair services provided by the company include engine
            diagnostics, engine repair, transmission repair, brake repair,
            suspension repair, and electrical repair. The company uses
            industry-best paints and materials, and their paint booth technology
            is of the best class. They provide a warranty of 6 months for their
            paint services. The company's quality equipment and tools ensure
            efficient and accurate dent removal. They also offer a callback
            service for customers who need assistance
          </p>
          <button>REQUEST A CALLBACK</button>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/engine01.jpg" alt="" />
        </div>
      </div>

 
      <div className={styles.automechanica}>
        <Title
          title="Why Company Name"
          subTitle="We are one of the leading auto repair companies."
        />
        <div className={styles.imgWithDescContainer}>
          <div className={styles.imgWithDescContainerFirst}>
            <div>
              <h2>Warranty</h2>
              <p>Assured Resoultion For Overheating Issues</p>
            </div>
          </div>
          <div>
            <img
              src="https://automechanica.com/uploads/service/why_automechanica_section_image/2/Service_USP_Main.png"
              alt=""
            />
          </div>
          <div className={styles.imgWithDescContainerSecond}>
            <div>
              <h2>Paint Booth</h2>
              <p>We Restore All Major Affected Engiens</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <HowItWorksRow />
      </div>
    </div>
  );
}

export default Repairs;
