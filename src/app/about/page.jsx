import React from "react";
import AboutCss from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className={AboutCss.container}>
      <div className={AboutCss.imgContainer}>
        <Image src="/ap-1.png" fill={true} alt="" className={AboutCss.img} />
        <div className={AboutCss.imgText}>
          <h1 className={AboutCss.imgTitle}>
            Crafting Code, Forging Solutions
          </h1>
          <h2 className={AboutCss.imgDesc}>Empowering the Digital Frontier</h2>
        </div>
      </div>
      <div className={AboutCss.textContainer}>
        <div className={AboutCss.item}>
          <h1 className={AboutCss.title}>Who am I?</h1>
          <p className={AboutCss.desc}>
            I am the architect of the virtual realms, a programmer by trade and
            a digital sorcerer by heart. With each line of code I conjure, I
            breathe life into the intangible, crafting ethereal experiences that
            dance across screens and traverse cyberspace.
            <br />
            But it's not just about the code – it's about empathy and
            understanding. I delve deep into the minds of users, translating
            their desires into intuitive interfaces and seamless interactions. I
            am a conduit between human aspiration and technological magic,
            weaving threads of innovation to bind them together.
          </p>
        </div>
        <div className={AboutCss.item}>
          <h1 className={AboutCss.title}>What I Do?</h1>
          <p className={AboutCss.desc}>
            I am the virtuoso of visuals, a frontend programmer who orchestrates
            the symphony of aesthetics and functionality. With pixels as my
            palette and browsers as my canvas, I craft immersive digital
            experiences that delight and captivate. My journey is one of
            translating concepts into captivating designs. Through the magic of
            HTML, CSS, and JavaScript, I breathe life into static layouts,
            infusing them with interactivity and responsiveness. Every pixel is
            meticulously placed, every animation choreographed, to ensure a
            seamless and engaging user journey.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link href="/contact" className={AboutCss.contact_button_link}>
            <button className={AboutCss.contact_button}>Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
