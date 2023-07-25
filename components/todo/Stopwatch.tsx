import { useState, useEffect } from "react";
import Image from "next/image";

import play from "../images/play.png";
import pause from "../images/pause.png";
import stop from "../images/stop.png";
import { TaskItem } from "./Task";

import styles from "../styles/Stopwatch.module.css";

export default function Stopwatch(props: {
  task: TaskItem;
  onStopClick: (time: number, task: TaskItem) => void;
  onPlayClick: (task: TaskItem) => void;
  onPauseClick: (time: number, task: TaskItem) => void;
}) {
  const [time, setTime] = useState<number>(props.task.time);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setIsRunning(props.task.isRunning);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    let minutes = time % 3600;
    minutes = Math.floor(minutes / 60);
    let seconds = (time % 3600) % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Image
        src={play}
        width={18}
        height={18}
        className={styles.button}
        onClick={(event) => props.onPlayClick(props.task)}
        alt="Start timer button"
      />
      <Image
        src={pause}
        width={18}
        height={18}
        className={styles.button}
        onClick={(event) => props.onPauseClick(time, props.task)}
        alt="Pause timer button"
      />
      <Image
        src={stop}
        width={18}
        height={18}
        className={styles.button}
        onClick={(event) => {
          props.onPauseClick(time, props.task);
          props.onStopClick(time, props.task);
          setTime(0);
        }}
        alt="Stop timer button"
      />
      <p className={styles.time}>{formatTime(time)}</p>
    </>
  );
}
