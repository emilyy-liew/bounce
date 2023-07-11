import { useState, ReactNode } from "react";
import Image from "next/image";

import openToggleImg from "../images/toggle_open.png";
import closeToggleImg from "../images/toggle_close.png";

import styles from "../styles/Toggle.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Toggle({ children, label, length }: {
  children: ReactNode;
  label: string;
  length: number;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  function handleOnClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <Image
        src={isVisible ? openToggleImg : closeToggleImg}
        width={18}
        height={18}
        className={styles.icon}
        onClick={handleOnClick}
        alt="expand toggle button"
      />
      <p onClick={handleOnClick} className={styles.p}>
        {label}
        <span className={utilStyles.subtext}>({length})</span>
      </p>
      {isVisible ? children : false}
    </div>
  );
}
