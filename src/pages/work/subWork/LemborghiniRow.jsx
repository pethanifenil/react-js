import React from "react";
import styles from "../../../styles/layout/subWork/lamborghini.module.css";
import Title from "../../../componets/common/Title";
import Bugatti from "./Bugatti";

function LemborghiniRow() {
  const data = [
    {
      img: "/images/J1.jpeg",
      title: "Aventador",
      price: "5.62 Cr",
      desc: "The Lamborghini Aventador is a luxury supercar that was introduced by Lamborghini in 2011. It is the most powerful production car in the world, with a top speed of 350 km/h (217 mph). The Aventador features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 12-cylinder V12 engine that produces 740 horsepower and 690 Nm of torque. The Aventador has a 0-100 km/h (62 mph) acceleration time of 2.7 seconds and a 0-200 km/h (124 mph) time of 7.1 seconds. The car's weight is 1,780 kg (3,920 lbs), and it has a 2+2 seating configuration. The Aventador is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/J2.jpeg",
      title: "Espada",
      price: "4.22 Cr",
      desc: "Lamborghini Urus is the world's first Super Sport Utility Vehicle, in which luxury, sportiness and performance meet comfort and versatility. It offers best-in-class driving dynamics, alongside its unmistakable elegance of design.",
    },
    {
      img: "/images/J3.jpeg",
      title: "Lamborghini Huracan EVO",
      price: "3.73 Cr",
      desc: "The Lamborghini Huracan EVO is a high-performance supercar that was introduced by Lamborghini in 2021. It is the latest iteration of the Huracan lineup, which was first introduced in 2014. The Huracan EVO features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 6.5-liter V12 engine that produces 700 horsepower and 560 Nm of torque. The Huracan EVO has a 0-100 km/h (62 mph) acceleration time of 2.7 seconds and a 0-200 km/h (124 mph) time of 7.1 seconds. The car's weight is 1,780 kg (3,920 lbs), and it has a 2+2 seating configuration. The Huracan EVO is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/J4.jpeg",
      title: "Aventador",
      price: "5.62 Cr",
      desc: "The Lamborghini Aventador is a luxury supercar that was introduced by Lamborghini in 2011. It is the most powerful production car in the world, with a top speed of 350 km/h (217 mph). The Aventador features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 12-cylinder V12 engine that produces 740 horsepower and 690 Nm of torque. The Aventador has a 0-100 km/h (62 mph) acceleration time of 2.7 seconds and a 0-200 km/h (124 mph) time of 7.1 seconds. The car's weight is 1,780 kg (3,920 lbs), and it has a 2+2 seating configuration. The Aventador is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/J5.jpeg",
      title: "Aventador",
      price: "5.62 Cr",
      desc: "The Lamborghini Aventador is a luxury supercar that was introduced by Lamborghini in 2011. It is the most powerful production car in the world, with a top speed of 350 km/h (217 mph). The Aventador features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 12-cylinder V12 engine that produces 740 horsepower and 690 Nm of torque. The Aventador has a 0-100 km/h (62 mph) acceleration time of 2.7 seconds and a 0-200 km/h (124 mph) time of 7.1 seconds. The car's weight is 1,780 kg (3,920 lbs), and it has a 2+2 seating configuration. The Aventador is available in various body styles, including sedan, gran turismo, and coupé.",
    },
  ];
  const componet = data.map((value, index) => {
    return (
      <Bugatti
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
          <Title title="Lamborghini" />
        </div>
        <div className={styles.finalContainer}>{componet}</div>
      </div>
    </div>
  );
}

export default LemborghiniRow;
