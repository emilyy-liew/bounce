"use client";

import Image from "next/image";
import Link from "next/link";

import pause from "../../images/pause.png";

import styles from "../../styles/IconBar.module.css";

const IconBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref className={styles.link}>
        <Image
          src={pause}
          width={36}
          height={36}
          className={styles.button}
          alt="Bounce"
        />
      </Link>
      <Link href="/helloWorld" passHref>
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
};

export default IconBar;
