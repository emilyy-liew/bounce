import Stopwatch from './Stopwatch';

import styles from '../../styles/Task.module.css';
import { MouseEventHandler } from 'react';

export interface TaskItem {
  id: string;
  name: string;
  deadline: string;
  duration: number;
  isRunning: boolean;
  checked: boolean;
  today?: number;
  difference?: number;
}

export default function Task({ task, onCheckboxChange, onStopClick, onPlayClick }: { 
    key: string;
    task: TaskItem;
    onCheckboxChange: (task: TaskItem) => void;
    onStopClick: (time: number, task: TaskItem) => void;
    onPlayClick: (task: TaskItem) => void;
  }) {

  return (
    <div className={styles.container}>
      <input className={styles.element} type="checkbox" id={task.id} onChange={() => onCheckboxChange()} defaultChecked={task.checked}/>
      <div className={styles.labelsContainer}>
        <label className={styles.label}>{task.name}</label>
        <label className={`${styles.label} ${styles.deadline}`}>{task.deadline}</label>
        <label className={`${styles.label} ${styles.duration}`}>{task.today} min</label>
        <Stopwatch task={task} onStopClick={onStopClick} onPlayClick={onPlayClick} />
      </div>
    </div>
  );
}
