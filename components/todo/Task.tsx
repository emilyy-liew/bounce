import Image from "next/image";

import Stopwatch from "./Stopwatch";
import edit from "../../public/images/edit.png";

import styles from "../../styles/Task.module.css";

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
  inEditMode: boolean;
}

/**
 * Creates a to do list task.
 *
 * @param task The task to create.
 * @param onCheckboxChange The function to call when the checkbox is changed.
 * @param onStopClick The function to call when the stop button is clicked.
 * @param onPlayClick The function to call when the play button is clicked.
 * @param onPauseClick The function to call when the pause button is clicked.
 * @param onEditClick The function to call when the edit button is clicked.
 * @returns A to do list task.
 */
export default function Task(props: {
  task: TaskItem;
  onCheckboxChange: (task: TaskItem) => void;
  onStopClick: (time: number, task: TaskItem) => void;
  onPlayClick: (task: TaskItem) => void;
  onPauseClick: (time: number, task: TaskItem) => void;
  onEditClick: () => void;
}) {
  const buttonSize = 20;
  return (
    <div className={styles.container}>
      <div className={styles.labelsContainer}>
        <input
          className={styles.element}
          type="checkbox"
          id={props.task.id}
          onChange={(event) => props.onCheckboxChange(props.task)}
          defaultChecked={props.task.checked}
        />
        <label className={styles.label}>{props.task.name}</label>

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
        <div className={styles.edit}>
          <Image
            src={edit}
            width={buttonSize}
            height={buttonSize}
            alt="Edit button"
            onClick={(event) => props.onEditClick()}
          />
        </div>
      </div>
    </div>
  );
}
