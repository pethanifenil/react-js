import React from "react";
import BMW from "./BMW";
import Title from "../../../componets/common/Title";
import styles from "../../../styles/layout/subWork/bmwRow.module.css";

function BmwRow() {
  const data = [
    {
      img: "/images/bmwi7.jpg",
      title: "BMW i7 2024",
      price: "2.13 Cr",
      desc: "The BMW i7 is a luxury electric vehicle that was introduced by BMW in 2021. It is the first all-electric model in the BMW i lineup and is available in various body styles, including sedan, gran turismo, and coupé. The i7 features a sleek design, advanced safety features, and cutting-edge technology.",
    },
    {
      img: "/images/bmwSe5.jpg",
      title: "BMW 5 Series 2024",
      price: "70 Lakh",
      desc: "The BMW 5 Series 2024 is a luxury sedan that was introduced by BMW in 2021. It is the eighth generation of the BMW 5 Series and is available in various body styles, including sedan, gran turismo, and coupé. The 2024 model year features an updated design, improved safety features, and enhanced technology.",
    },

    {
      img: "/images/bmwx01.jpg",
      title: "BMW X1",
      price: "52 Lakh",
      desc: "I apologize for the confusion in the previous code snippet. The BMW X1 is not included in the provided context. However, I can provide you with a sample BMW X1 description based on the format of the other descriptions in the context.",
    },
    {
      img: "/images/BMW2.jpeg",
      title: "BMW X1",
      price: "52 Lakh",
      desc: "I apologize for the confusion in the previous code snippet. The BMW X1 is not included in the provided context. However, I can provide you with a sample BMW X1 description based on the format of the other descriptions in the context.",
    },
    {
      img: "/images/BMW3.jpeg",
      title: "BMW X1",
      price: "52 Lakh",
      desc: "I apologize for the confusion in the previous code snippet. The BMW X1 is not included in the provided context. However, I can provide you with a sample BMW X1 description based on the format of the other descriptions in the context.",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <BMW
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
        <Title title="BMW" />
      </div>
      <div className={styles.finalContainer}>{componet}</div>
    </div>
  );
}

export default BmwRow;
