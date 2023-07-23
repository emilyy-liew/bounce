import IconBar from "./IconBar";

import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Layout({ children, signOut }) {
  return (
    <main>
      <div className={utilStyles.rowStack}>
        <div className={`${utilStyles.columnStack} ${utilStyles.leftMargin}`}>
          {children}
        </div>

        <IconBar signOut={signOut} />
        
        <div className={styles.updateText}>
          <a
            href="https://github.com/emilyy-liew/bounce/tree/main"
            target="_blank" /* Opens the link in a new tab */
            rel="noopener noreferrer" /* Recommended for security */
            className={styles.underlinedText}
          >
            Bounce July 22, 2023 Version:
          </a>
          {" "} Update task to save timer.
        </div>
      </div>
    </main>
  );
}
