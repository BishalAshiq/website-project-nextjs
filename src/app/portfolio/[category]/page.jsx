import React from "react";
import PortfolioCategoriesCss from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
// import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return [
    {
      title: "Data Not Found",
      desc: "Sorry, no data available for this category.",
    },
  ];
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={PortfolioCategoriesCss.container}>
      <h1 className={PortfolioCategoriesCss.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={PortfolioCategoriesCss.item} key={item.id}>
          <div className={PortfolioCategoriesCss.content}>
            <h1 className={PortfolioCategoriesCss.title}>{item.title}</h1>
            <p className={PortfolioCategoriesCss.desc}>{item.desc}</p>
            <button text="See More" url="#" />
          </div>
          <div className={PortfolioCategoriesCss.imgContainer}>
            <Image
              className={PortfolioCategoriesCss.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
