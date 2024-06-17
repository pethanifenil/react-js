import React from "react";
import Mercedes from "./Mercedes";
import Title from "../../../componets/common/Title";
import styles from "../../../styles/layout//subWork/mercedes.module.css";

function MercedesRow() {
  const data = [
    {
      img: "/images/MA1.jpeg",
      title: "GLC",
      price: "74.50 Lakh",
      desc: "The Mercedes-Benz GLC is a luxury crossover SUV that was introduced by Mercedes-Benz in 2015. It is the first model in the GLC lineup and is available in various body styles, including sedan, gran turismo, and coupé. The GLC features a sleek design, advanced safety features, and cutting-edge technology.",
    },
    {
      img: "/images/MA2.jpeg",
      title: "GLS",
      price: "2.96 Cr",
      desc: "The Mercedes-Benz GLS is a luxury SUV that was introduced by Mercedes-Benz in 2016. It is the second model in the GLC lineup and is available in various body styles, including SUV, gran turismo, and coupé. The GLS features a sleek design, advanced safety features, and cutting-edge technology. It is a larger and more luxurious version of the GLC, offering more space, comfort, and advanced features.",
    },

    {
      img: "/images/MA3.jpeg",
      title: "EQB",
      price: "74.50 Lakh",
      desc: "The Mercedes-Benz EQB is a luxury electric SUV that was introduced by Mercedes-Benz in 2020. It is the first all-electric model in the EQ lineup and is available in various body styles, including SUV and gran turismo. The EQB features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a powerful electric motor that provides impressive acceleration and range. The EQB offers a spacious and comfortable interior, with ample space for passengers and cargo. It also features advanced driver assistance systems and a user-friendly infotainment system. Overall, the Mercedes-Benz EQB is a luxurious and high-performance electric SUV that offers a unique driving experience.",
    },
    {
      img: "/images/MA4.jpeg",
      title: "EQB",
      price: "74.50 Lakh",
      desc: "The Mercedes-Benz EQB is a luxury electric SUV that was introduced by Mercedes-Benz in 2020. It is the first all-electric model in the EQ lineup and is available in various body styles, including SUV and gran turismo. The EQB features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a powerful electric motor that provides impressive acceleration and range. The EQB offers a spacious and comfortable interior, with ample space for passengers and cargo. It also features advanced driver assistance systems and a user-friendly infotainment system. Overall, the Mercedes-Benz EQB is a luxurious and high-performance electric SUV that offers a unique driving experience.",
    },
    {
      img: "/images/mer02.jpg",
      title: "EQB",
      price: "74.50 Lakh",
      desc: "The Mercedes-Benz EQB is a luxury electric SUV that was introduced by Mercedes-Benz in 2020. It is the first all-electric model in the EQ lineup and is available in various body styles, including SUV and gran turismo. The EQB features a sleek design, advanced safety features, and cutting-edge technology. It is powered by a powerful electric motor that provides impressive acceleration and range. The EQB offers a spacious and comfortable interior, with ample space for passengers and cargo. It also features advanced driver assistance systems and a user-friendly infotainment system. Overall, the Mercedes-Benz EQB is a luxurious and high-performance electric SUV that offers a unique driving experience.",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <Mercedes
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
        <Title title="Mercedes" />
      </div>
      <div className={styles.finalContainer}>{componet}</div>
    </div>
  );
}

export default MercedesRow;
