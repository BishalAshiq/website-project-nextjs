import React from "react";
import FooterCss from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={FooterCss.container}>
      <div>©2023 Ashiqul. All rights reserved.</div>
      <div className={FooterCss.social}>
        <Image
          className={FooterCss.icon}
          src="/F-1.png"
          alt="instagram-logo"
          height={20}
          width={20}
        />
        <Image
          className={FooterCss.icon}
          src="/F-2.png"
          alt="instagram-logo"
          height={20}
          width={20}
        />
        <Image
          className={FooterCss.icon}
          src="/F-3.png"
          alt="instagram-logo"
          height={20}
          width={20}
        />
        <Image
          className={FooterCss.icon}
          src="/F-4.png"
          alt="instagram-logo"
          height={20}
          width={20}
        />
      </div>
    </div>
  );
};

export default Footer;
