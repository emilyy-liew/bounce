import IconBar from "./IconBar";
import { updatesText } from "../pages/updatesLog";

import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Layout({ children, signOut }) {
  return (
    <main>
      <div>
        <IconBar signOut={signOut} />

        <div className={`${utilStyles.columnStack} ${utilStyles.leftMargin}`}>
          {children}
        </div>
      </div>
      <div className={styles.updateText}>
        <a
          href="https://github.com/emilyy-liew/bounce/tree/main"
          target="_blank" /* Opens the link in a new tab */
          rel="noopener noreferrer" /* Recommended for security */
          className={styles.link}
        >
          Bounce July 26, 2023 Version:
        </a>
        {" " + updatesText}
      </div>
    </main>
  );
}
