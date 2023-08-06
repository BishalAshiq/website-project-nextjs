import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <h1>Hello I'm XXX</h1>
        <Image src="/hero.png" alt="home-banner" height={500} width={500} />
      </div>
    </div>
  );
}
