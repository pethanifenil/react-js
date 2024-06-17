import React from "react";
import Bugatti from "./Bugatti";
import Title from "../../../componets/common/Title";
import styles from ".././../../styles/layout/subWork/buggatiRow.module.css";

function BuggatiRow() {
  const data = [
    {
      img: "/images/RRP1.jpg",
      title: "Buggati Chiron",
      price: "19.21 Cr",
      desc: "The Buggati Chiron is a luxury supercar that was introduced by Bugatti in 2021. It is the fastest production car in the world, with a top speed of 443 km/h (275 mph). The Chiron features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 16-cylinder W16 engine that produces 1,500 horsepower and 1,600 Nm of torque. The Chiron has a 0-100 km/h (62 mph) acceleration time of 2.4 seconds and a 0-200 km/h (124 mph) time of 6.5 seconds. The car's weight is 1,570 kg (3,463 lbs), and it has a 2+2 seating configuration. The Chiron is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/RRP2.jpeg",
      title: "Bugatti Centodieci ",
      price: "61 Cr",
      desc: "The Buggati Centodieci is a luxury supercar that was introduced by Bugatti in 2021. It is the most powerful production car in the world, with a top speed of 450 km/h (280 mph). The Centodieci features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 16-cylinder W16 engine that produces 1,600 horsepower and 1,600 Nm of torque. The Centodieci has a 0-100 km/h (62 mph) acceleration time of 2.2 seconds and a 0-200 km/h (124 mph) time of 6.4 seconds. The car's weight is 1,570 kg (3,463 lbs), and it has a 2+2 seating configuration. The Centodieci is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/RRP3.jpeg",
      title: "Buggati Divo",
      price: "41 Lakh",
      desc: "The Buggati Divo is a luxury supercar that was introduced by Bugatti in 2021. It is the most powerful production car in the world, with a top speed of 450 km/h (280 mph). The Divo features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 16-cylinder W16 engine that produces 1,600 horsepower and 1,600 Nm of torque. The Divo has a 0-100 km/h (62 mph) acceleration time of 2.2 seconds and a 0-200 km/h (124 mph) time of 6.4 seconds. The car's weight is 1,570 kg (3,463 lbs), and it has a 2+2 seating configuration. The Divo is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/RRP4.jpeg",
      title: "Buggati Divo",
      price: "41 Lakh",
      desc: "The Buggati Divo is a luxury supercar that was introduced by Bugatti in 2021. It is the most powerful production car in the world, with a top speed of 450 km/h (280 mph). The Divo features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 16-cylinder W16 engine that produces 1,600 horsepower and 1,600 Nm of torque. The Divo has a 0-100 km/h (62 mph) acceleration time of 2.2 seconds and a 0-200 km/h (124 mph) time of 6.4 seconds. The car's weight is 1,570 kg (3,463 lbs), and it has a 2+2 seating configuration. The Divo is available in various body styles, including sedan, gran turismo, and coupé.",
    },
    {
      img: "/images/RRP5.jpeg",
      title: "Buggati Divo",
      price: "41 Lakh",
      desc: "The Buggati Divo is a luxury supercar that was introduced by Bugatti in 2021. It is the most powerful production car in the world, with a top speed of 450 km/h (280 mph). The Divo features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a 16-cylinder W16 engine that produces 1,600 horsepower and 1,600 Nm of torque. The Divo has a 0-100 km/h (62 mph) acceleration time of 2.2 seconds and a 0-200 km/h (124 mph) time of 6.4 seconds. The car's weight is 1,570 kg (3,463 lbs), and it has a 2+2 seating configuration. The Divo is available in various body styles, including sedan, gran turismo, and coupé.",
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
          <Title title="Buggati" />
        </div>
        <div className={styles.finalContainer}>{componet}</div>
      </div>
    </div>
  );
}

export default BuggatiRow;
