import { useState, ReactNode } from "react";
import Image from "next/image";

import expandedImg from "../images/expanded.png";
import collapsedImg from "../images/collapsed.png";

import styles from "../styles/Collapsible.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Collapsible(props: {
  children: ReactNode;
  label: string;
  length: number;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const imageSize = 18;

  function handleOnClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <Image
        src={isVisible ? expandedImg : collapsedImg}
        width={imageSize}
        height={imageSize}
        className={styles.icon}
        onClick={handleOnClick}
        alt={isVisible ? "expanded button" : "collapsed button"}
      />
      <p onClick={handleOnClick} className={styles.p}>
        {props.label}
        <span className={utilStyles.subtext}>({props.length})</span>
      </p>
      <div className={`${styles.collapsibleContent} ${isVisible && styles.visible}`}>
        {props.children}
      </div>
    </div>
  );
}
