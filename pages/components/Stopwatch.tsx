import { useState, useEffect } from "react";
import Image from "next/image";

import play from "../../images/play.png";
import pause from "../../images/pause.png";
import stop from "../../images/stop.png";

import styles from "../../styles/Stopwatch.module.css";

interface StopwatchProps {
  task: {
    isRunning: boolean;
  };
  onStopClick: (time: number, task: { isRunning: boolean }) => void;
  onPlayClick: () => void;
}

const Stopwatch: React.FC<StopwatchProps> = ({ task, onStopClick, onPlayClick }) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (task.isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [task.isRunning]);

  function handlePause() {
    task.isRunning = false;
  }

  const formatTime = (time: number): string => {
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
        onClick={onPlayClick}
        alt="Start timer button"
      />
      <Image
        src={pause}
        width={18}
        height={18}
        className={styles.button}
        onClick={handlePause}
        alt="Pause timer button"
      />
      <Image
        src={stop}
        width={18}
        height={18}
        className={styles.button}
        onClick={() => {
          handlePause();
          onStopClick(time, task);
          setTime(0);
        }}
        alt="Stop timer button"
      />
      <p className={styles.time}>{formatTime(time)}</p>
    </>
  );
};

export default Stopwatch;
