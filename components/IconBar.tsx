import Image from "next/image";
import Link from "next/link";

import pause from "../images/pause.png";

import styles from "../styles/IconBar.module.css";

export default function IconBar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <Image
          src={pause}
          width={36}
          height={36}
          className={styles.button}
          alt="Bounce"
        />
      </Link>
      <Link href="/../helloWorld">
        <Image
          src={pause}
          width={36}
          height={36}
          className={styles.button}
          alt="Hello World"
        />
      </Link>
    </div>
  );
}
