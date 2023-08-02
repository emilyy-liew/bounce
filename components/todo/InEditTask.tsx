import Image from "next/image";
import { useState } from "react";

import Stopwatch from "./Stopwatch";
import checklist from "../../public/images/checklist.png";
import x from "../../public/images/x.png";
import { TaskItem } from "./Task";

import styles from "../../styles/InEditTask.module.css";

export default function InEditTask(props: {
  task: TaskItem;
  onCheckboxChange: (task: TaskItem) => void;
  onStopClick: (time: number, task: TaskItem) => void;
  onPlayClick: (task: TaskItem) => void;
  onPauseClick: (time: number, task: TaskItem) => void;
  onEditClick: (task: TaskItem) => void;
}) {
  const buttonSize = 20;
  const [task, setTask] = useState<TaskItem>(props.task);

  function handleChange(event, property: string) {
    const newTask = { ...task };
    newTask[property] = event.target.value;
    setTask(newTask);
  }

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
        <textarea
          className={styles.label}
          value={task.name}
          onChange={(event) => handleChange(event, "name")}
        />

        <input
          type="date"
          className={`${styles.label} ${styles.deadline}`}
          value={task.deadline}
          onChange={(event) => handleChange(event, "deadline")}
        />

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
            src={checklist}
            width={buttonSize}
            height={buttonSize}
            alt="Edit button"
            onClick={(event) => props.onEditClick(task)}
          />
          {/* <Image
            src={x}
            width={buttonSize}
            height={buttonSize}
            alt="Discard Changes button"
            onClick={(event) => props.onEditClick(props.task)}
          /> */}
        </div>
      </div>
    </div>
  );
}
