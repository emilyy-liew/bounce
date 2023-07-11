import Stopwatch from './Stopwatch';

import styles from '../../styles/Task.module.css';
import { MouseEventHandler } from 'react';

export interface TaskItem {
  id: string;
  name: string;
  deadline: string;
  duration: number;
  checked: boolean;
  isRunning: boolean;
  today?: number;
  difference?: number;
}

export default function Task({ task, onCheckboxClick, onStopClick, onPlayClick }:
  { task: TaskItem;
    onCheckboxClick: MouseEventHandler<HTMLInputElement>;
    onStopClick: (time: number, task: TaskItem) => void;
    onPlayClick: (task: TaskItem) => void;
  }) {
  return (
    <div className={styles.container} key={task.id}>
      <input className={styles.element} type="checkbox" checked={task.checked} id={task.id} onClick={onCheckboxClick}/>
      <div className={styles.labelsContainer}>
        <label className={styles.label}>{task.name}</label>
        <label className={`${styles.label} ${styles.deadline}`}>{task.deadline}</label>
        <label className={`${styles.label} ${styles.duration}`}>{task.today} min</label>
        <Stopwatch task={task} onStopClick={onStopClick} onPlayClick={onPlayClick} />
      </div>
    </div>
  );
}
