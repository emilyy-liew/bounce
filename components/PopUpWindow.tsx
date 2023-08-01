import Image from "next/image";

import x from "../public/images/x.png";

import styles from "../styles/PopUpWindow.module.css";
import utilStyles from "../styles/utils.module.css";

export default function PopUpWindow(props: { setter; label; children }) {
  const buttonSize = 20;
  return (
    <div className={styles.window}>
      <div className={utilStyles.columnStack}>
        <div className={`${utilStyles.rowStack} ${styles.titleBar}`}>
          <span className={`${styles.button}`}>
            <Image
              src={x}
              width={buttonSize}
              height={buttonSize}
              alt="X out the window"
              onClick={() => props.setter(false)}
            />
          </span>
          <h2 className={styles.title}>{props.label}</h2>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
}
