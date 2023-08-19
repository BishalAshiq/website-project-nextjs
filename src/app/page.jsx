import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import lottie from "lottie-web";
import homeBanner from "../../public/Home-banner.json";
// import { useClient } from "next/server-components"; // Import useClient

export default function Home() {
  // useClient();
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.getElementById("lottie-container"), // Replace with your element ID
  //     animationData: homeBanner,
  //     loop: true,
  //     autoplay: true,
  //   });
  // }, []);
  return (
    <div className="flex items-center gap-10 mt-20">
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better development for your Better Web Application.
        </h1>
        <p className="text-1xl font-medium">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="/portfolio">
          <button className={styles.home_button}>See Our Work</button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.img}
          src="/hero.png"
          alt="home-banner"
          height={500}
          width={500}
        />
        {/* <div
          id="lottie-container"
          style={{ width: "300px", height: "300px" }}
        ></div> */}
      </div>
    </div>
  );
}
