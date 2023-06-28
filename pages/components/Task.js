import Stopwatch from './Stopwatch';

import styles from '../../styles/Task.module.css';

export default function Task({ task, onCheckboxClick, onStopClick, onPlayClick }) {
  return (
    <div className={styles.container}>
      <input className={styles.element} type="checkbox" checked={task.checked} id={task.id} onClick={onCheckboxClick}/>
      <div className={styles.labelsContainer}>
        <label className={styles.label}>{task.taskName}</label>
        <label className={`${styles.label} ${styles.deadline}`}>{task.taskDeadline}</label>
        <label className={`${styles.label} ${styles.duration}`}>{task.today} min</label>
        <Stopwatch task={task} onStopClick={onStopClick} onPlayClick={onPlayClick} />
      </div>
    </div>
  );
}
