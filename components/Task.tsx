import Stopwatch from "./Stopwatch";

import styles from "../styles/Task.module.css";

export interface TaskItem {
  id: string;
  name: string;
  deadline: string;
  duration: number;
  isRunning: boolean;
  checked: boolean;
  today?: number;
  difference?: number;
  time: number;
}

export default function Task(props: {
  task: TaskItem;
  onCheckboxChange: (task: TaskItem) => void;
  onStopClick: (time: number, task: TaskItem) => void;
  onPlayClick: (task: TaskItem) => void;
  onPauseClick: (time: number, task: TaskItem) => void;
}) {
  return (
    <div className={styles.container}>
      <input
        className={styles.element}
        type="checkbox"
        id={props.task.id}
        onChange={(event) => props.onCheckboxChange(props.task)}
        defaultChecked={props.task.checked}
      />
      <div className={styles.labelsContainer}>
        <label className={styles.label}>
          {props.task.name}
        </label>

        <label className={`${styles.label} ${styles.deadline}`}>
          {props.task.deadline}
        </label>

        <label className={`${styles.label} ${styles.duration}`}>
          {props.task.today} min
        </label>
        
        <Stopwatch
          task={props.task}
          onStopClick={props.onStopClick}
          onPlayClick={props.onPlayClick}
          onPauseClick={props.onPauseClick}
        />
      </div>
    </div>
  );
}
