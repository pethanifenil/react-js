import React from "react";
import Title from "../../../componets/common/Title";
import Ferrari from "./Ferrari";
import styles from "../../../styles/layout/subWork/ferrari.module.css";

function FerrariRow() {
  const data = [
    {
      img: "/images/M1.jpeg",
      title: "Ferrari F8 Tributo",
      price: "4.02 Cr",
      desc: "The Ferrari F8 Tributo is a two-seater sports car that was introduced by Ferrari in 2020. It is the successor to the Ferrari 488 GTB and is inspired by the legendary Ferrari 250 GT Berlinetta. The F8 Tributo features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 6.5-liter V8 engine that produces 660 horsepower and 560 Nm of torque. The F8 Tributo has a 0-100 km/h (62 mph) acceleration time of 2.9 seconds and a 0-200 km/h (124 mph) time of 7.9 seconds. The car's weight is 1,540 kg (3,394 lbs), and it has a 2+2 seating configuration. The F8 Tributo is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/M2.jpeg",
      title: "Ferrari Roma",
      price: "3.76 Cr",
      desc: "The Ferrari Roma is a luxury supercar that was introduced by Ferrari in 2021. It is the successor to the Ferrari 488 GTB and is inspired by the legendary Ferrari 250 GT Berlinetta. The Roma features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 6.5-liter V8 engine that produces 660 horsepower and 560 Nm of torque. The Roma has a 0-100 km/h (62 mph) acceleration time of 2.9 seconds and a 0-200 km/h (124 mph) time of 7.9 seconds. The car's weight is 1,540 kg (3,394 lbs), and it has a 2+2 seating configuration. The Roma is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/M3.jpeg",
      title: "Ferrari Portofino",
      price: "3.5 Cr",
      desc: "The Ferrari Portofino is a luxury supercar that was introduced by Ferrari in 2018. It is the successor to the Ferrari 458 Italia and is inspired by the legendary Ferrari 250 GT Berlinetta. The Portofino features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 3.9-liter V8 engine that produces 660 horsepower and 560 Nm of torque. The Portofino has a 0-100 km/h (62 mph) acceleration time of 2.9 seconds and a 0-200 km/h (124 mph) time of 7.9 seconds. The car's weight is 1,540 kg (3,394 lbs), and it has a 2+2 seating configuration. The Portofino is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/M4.jpeg",
      title: "Ferrari F8 Tributo",
      price: "4.02 Cr",
      desc: "The Ferrari F8 Tributo is a two-seater sports car that was introduced by Ferrari in 2020. It is the successor to the Ferrari 488 GTB and is inspired by the legendary Ferrari 250 GT Berlinetta. The F8 Tributo features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 6.5-liter V8 engine that produces 660 horsepower and 560 Nm of torque. The F8 Tributo has a 0-100 km/h (62 mph) acceleration time of 2.9 seconds and a 0-200 km/h (124 mph) time of 7.9 seconds. The car's weight is 1,540 kg (3,394 lbs), and it has a 2+2 seating configuration. The F8 Tributo is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/M5.jpeg",
      title: "Ferrari F8 Tributo",
      price: "4.02 Cr",
      desc: "The Ferrari F8 Tributo is a two-seater sports car that was introduced by Ferrari in 2020. It is the successor to the Ferrari 488 GTB and is inspired by the legendary Ferrari 250 GT Berlinetta. The F8 Tributo features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 6.5-liter V8 engine that produces 660 horsepower and 560 Nm of torque. The F8 Tributo has a 0-100 km/h (62 mph) acceleration time of 2.9 seconds and a 0-200 km/h (124 mph) time of 7.9 seconds. The car's weight is 1,540 kg (3,394 lbs), and it has a 2+2 seating configuration. The F8 Tributo is available in various body styles, including sedan, gran turismo, and coupé.",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <Ferrari
        key={index}
        img={value.img}
        title={value.title}
        desc={value.desc}
        price={value.price}
      />
    );
  });
  return (
    <div>
      <div>
        <div>
          <Title title="Ferrari" />
        </div>
        <div className={styles.finalContainer}>{componet}</div>
      </div>
    </div>
  );
}

export default FerrariRow;
