import Image from "next/image";
import Link from "next/link";

import pause from "../images/pause.png";
import rocket_ship from "../images/rocket_ship.png";
import coming_soon from "../images/coming_soon.png";

import styles from "../styles/IconBar.module.css";

export default function IconBar() {
  const buttonSize = 48;

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <Image
          src={rocket_ship}
          width={buttonSize}
          height={buttonSize}
          className={styles.button}
          alt="Bounce"
        />
      </Link>
      <Link href="/helloWorld" className={styles.link}>
        <Image
          src={coming_soon}
          width={buttonSize}
          height={buttonSize}
          className={styles.button}
          alt="HelloWorld"
        />
      </Link>
    </div>
  );
}
