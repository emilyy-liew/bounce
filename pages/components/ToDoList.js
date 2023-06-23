import Task from "./Task";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [name, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [duration, setDuration] = useState('');

  function handleCheckboxClick(id) {
    const newTaskList = taskList.filter((task) => task.id != id);
    setTaskList(newTaskList);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      let newTaskList = taskList.slice();
      const newTask = {
        id: uuidv4(),
        taskName: name,
        taskDeadline: deadline,
        taskDuration: duration
      }
      newTaskList.push(newTask);
      setTaskList(newTaskList);
      setTaskName('');
      setDeadline('');
      setDuration('');
    }
  }

  function handleChange(event, setter) {
    setter(event.target.value);
  }

  return (
    <>
      <input type="text" placeholder="Enter task" value={name} onChange={(event) => handleChange(event, setTaskName)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="date" value={deadline} onChange={(event) => handleChange(event, setDeadline)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="number" placeholder="Enter task duration" value={duration} onChange={(event) => handleChange(event, setDuration)} onKeyPress={(event) => handleKeyPress(event)} />
      {taskList.map((task) => <Task key={task.id} task={task} onCheckboxClick={() => handleCheckboxClick(task.id)}/>)}
    </>
  );
}
