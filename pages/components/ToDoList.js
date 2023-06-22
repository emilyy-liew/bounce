import Task from "./Task";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  function handleCheckboxClick(id) {
    const newTaskList = taskList.filter((task) => task.id != id);
    setTaskList(newTaskList);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      let newTaskList = taskList.slice();
      const newTask = {
        id: uuidv4(),
        taskName: event.target.value
      }
      newTaskList.push(newTask);
      setTaskList(newTaskList);
      event.target.value = "";
    }
  }

  return (
    <>
      <input type="text" onKeyPress={(event) => handleKeyPress(event)} />
      {taskList.map((task) => <Task key={task.id} task={task} onCheckboxClick={() => handleCheckboxClick(task.id)}/>)}
    </>
  );
}
