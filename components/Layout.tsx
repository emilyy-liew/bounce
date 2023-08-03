import { useState, useEffect, ReactNode } from "react";

import IconBar from "./IconBar";

import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Layout(props: {
  children: ReactNode;
  signOut: (data: any) => void;
}) {
  return (
    <main>
      <div className={styles.contentWrapper}>
        <div className={`${utilStyles.columnStack} ${utilStyles.leftMargin}`}>
          {props.children}
        </div>
        <IconBar signOut={props.signOut} />
      </div>
      <div className={styles.updateText}>
        <a
          href="https://github.com/emilyy-liew/bounce/tree/main"
          target="_blank" /* Opens the link in a new tab */
          rel="noopener noreferrer" /* Recommended for security */
          className={styles.link}
        >
          August 1, 2023 Version
        </a>
      </div>
    </main>
  );
}
