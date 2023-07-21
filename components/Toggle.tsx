import { useState, ReactNode } from "react";
import Image from "next/image";

import openToggleImg from "../images/toggle_open.png";
import closeToggleImg from "../images/toggle_close.png";

import styles from "../styles/Toggle.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Toggle(props: {
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
        {props.label}
        <span className={utilStyles.subtext}>({props.length})</span>
      </p>
      {isVisible ? props.children : false}
    </div>
  );
}
