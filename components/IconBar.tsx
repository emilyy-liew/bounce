import Image from "next/image";
import Link from "next/link";

import rocket_ship from "../images/rocket_ship.png";
import cooking from "../images/cooking.png";
import updates_log from "../images/updates_log.png";
import sign_out from "../images/sign_out.png";

import styles from "../styles/IconBar.module.css";

export default function IconBar(props: { signOut: any }) {
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
      <Link href="/recipes" className={styles.link}>
        <Image
          src={cooking}
          width={buttonSize}
          height={buttonSize}
          className={styles.button}
          alt="Recipes!"
        />
      </Link>
      <Link href="/updatesLog" className={styles.link}>
        <Image
          src={updates_log}
          width={buttonSize}
          height={buttonSize}
          className={styles.button}
          alt="Updates Log"
        />
      </Link>
      <Image
        src={sign_out}
        width={buttonSize}
        height={buttonSize}
        className={styles.button}
        alt="Sign Out"
        onClick={props.signOut}
      />
    </div>
  );
}
