import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Lottie } from "lottie-react";
import homeBanner from "../../public/Home-banner.json";

export default function Home() {
  const homeLottie = {
    loop: true,
    autoplay: true,
    animationData: homeBanner, // Your Lottie animation JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better development for your Better Web Application.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="/portfolio">
          <button className={styles.home_button}>See Our Work</button>
        </Link>
      </div>
      <div className={styles.item}>
        {/* <Image
          className={styles.img}
          src="/hero.png"
          alt="home-banner"
          height={500}
          width={500}
        /> */}
        <Lottie
          animationData={homeLottie} // Your Lottie animation JSON
          loop
          autoplay
        />
      </div>
    </div>
  );
}
