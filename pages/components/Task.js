import styles from '../../styles/Task.module.css';

export default function Task({ task, onCheckboxClick, currentDate }) {
  return (
    <div className={styles.container}>
      <input className={styles.element} type="checkbox" checked={task.checked} id={task.id} onClick={onCheckboxClick}/>
      <label className={`${styles.element} ${styles.label} ${styles.name}`}>{task.taskName}</label>
      <label className={`${styles.element} ${styles.label} ${styles.deadline}`}>{task.taskDeadline}</label>
      <label className={`${styles.element} ${styles.label} ${styles.duration}`}>{task.taskDuration}</label>
    </div>
  );
}
