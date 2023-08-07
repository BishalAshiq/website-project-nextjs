import React from "react";
import PortFolioCss from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={PortFolioCss.container}>
      <h1 className={PortFolioCss.selectTitle}>Choose a gallery</h1>
      <div className={PortFolioCss.items}>
        <Link href="/portfolio/projects" className={PortFolioCss.item}>
          <span className={PortFolioCss.title}>Projects</span>
        </Link>
        <Link href="/portfolio/websites" className={PortFolioCss.item}>
          <span className={PortFolioCss.title}>Website</span>
        </Link>
        <Link href="/portfolio/application" className={PortFolioCss.item}>
          <span className={PortFolioCss.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
