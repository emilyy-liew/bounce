export default function Task({ task, onCheckboxClick }) {
  return (
    <div>
      <input type="checkbox" id={task.id} onClick={onCheckboxClick}/>
      <label htmlFor={task.id}>{task.taskName}</label>
      <label htmlFor={task.id}>{task.taskDeadline}</label>
      <label htmlFor={task.id}>{task.taskDuration}</label>
    </div>
  );
}
