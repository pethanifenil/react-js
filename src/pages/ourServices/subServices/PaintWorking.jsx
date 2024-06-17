import React from "react";
import styles from "../../../styles/layout/subServices/paintWorking.module.css";
import Title from "../../../componets/common/Title";
import HowItWorksRow from "./paintHowWork.jsx/HowItWorksRow";

function PaintWorking() {
  return (
    <div style={{background : "#eeeeee"}}>
      {/* paint work section */}
      <Title title="Paint Working"/>
      <div className={styles.paintMainContainer}>
        <div className={styles.descContainer}>
          <h2>Paint Working</h2>
          <p>
            Our technicians at AutoMechanica take immense pride in the quality
            of our work and in caring for your vehicle. All products and
            services used at our service center are of the highest quality to
            ensure the proper paint texture, gloss, and finish is rendered to
            your car. We go out of our way to make sure the process is smooth
            and hassle-free, keeping your satisfaction as our top priority.
          </p>
          <button>REQUEST A CALLBACK</button>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/paint01.jpg" alt="" />
        </div>
      </div>

      {/* company info */}
      <div className={styles.automechanica}>
        <Title
          title="Why Company Name"
          subTitle="We're A Company Of Talented Engineers & Mechanics"
        />
        <div className={styles.imgWithDescContainer}>
          <div className={styles.imgWithDescContainerFirst}>
            <div>
              <h3>Warranty</h3>
              <p>Paint Warranty for 6 Months</p>
            </div>
            <div>
              <h3>Best Materials</h3>
              <p>Industry Best Paints & Materials used</p>
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
              <h3>Paint Booth</h3>
              <p>Best In Class Paint Booth Technology</p>
            </div>
            <div>
              <h3>Quality</h3>
              <p>Best Quality Equipment & Tools for Dent Removal</p>
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

export default PaintWorking;
