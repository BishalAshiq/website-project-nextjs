import React from "react";
import PortfolioCategoriesCss from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={PortfolioCategoriesCss.container}>
      <h1 className={PortfolioCategoriesCss.catTitle}>{params.category}</h1>
      <div className={PortfolioCategoriesCss.item}>
        <div className={PortfolioCategoriesCss.content}>
          <h1 className={PortfolioCategoriesCss.title}>Test</h1>
          <p className={PortfolioCategoriesCss.desc}>Desc</p>
          <button text="See More" url="#">
            See More
          </button>
        </div>
        <div className={PortfolioCategoriesCss.imgContainer}>
          <Image src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
