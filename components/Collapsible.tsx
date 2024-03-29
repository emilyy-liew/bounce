import { useState, ReactNode } from "react";
import Image from "next/image";

import expandedImg from "../public/images/expanded.png";
import collapsedImg from "../public/images/collapsed.png";

import styles from "../styles/Collapsible.module.css";

/**
 * Creatses a collapsible section that contains content.
 *
 * @param children The content of the collapsible section.
 * @param label The label of the collapsible section.
 * @param visible Whether the content is collapsed.
 * @returns A collapsible section.
 */
export default function Collapsible(props: {
  children: ReactNode;
  label: ReactNode;
  visible: boolean;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(props.visible);
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
      </p>
      <div
        className={`${styles.collapsibleContent} ${
          isVisible && styles.visible
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
