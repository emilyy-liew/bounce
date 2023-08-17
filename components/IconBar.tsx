import Image from "next/image";
import Link from "next/link";

import devs from "../public/devs.json";
import rocket_ship from "../public/images/rocket_ship.png";
import cooking from "../public/images/cooking.png";
import updates_log from "../public/images/updates_log.png";
import sign_out from "../public/images/sign_out.png";

import styles from "../styles/IconBar.module.css";

export default function IconBar(props: {
  signOut: (data: any) => void;
  user: any;
}) {
  const buttonSize = 48;
  const isDev = devs.includes(props.user.username);

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

      {isDev && (
        <Link href="/updatesLog" className={styles.link}>
          <Image
            src={updates_log}
            width={buttonSize}
            height={buttonSize}
            className={styles.button}
            alt="Updates Log"
          />
        </Link>
      )}

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
