import Task from "./Task";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [name, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [duration, setDuration] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleCheckboxClick(task) {
    let newCompleted = completed.slice();
    let newTaskList = taskList.slice();

    task.checked = !task.checked;

    if (task.checked) {
      newCompleted.push(task);
      newTaskList = taskList.filter((curr) => curr.id != task.id);
    } else {
      newTaskList.push(task);
      newCompleted = completed.filter((curr) => curr.id != task.id);
    }

    setTaskList(newTaskList);
    setCompleted(newCompleted);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      let newTaskList = taskList.slice();
      const newTask = {
        id: uuidv4(),
        taskName: name,
        taskDeadline: deadline,
        taskDuration: duration,
        checked: false
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

  let categories = [];
  taskList.map((task) => {
    const deadline = new Date(task.taskDeadline);
    let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    if (difference < 1) {
      difference = 0;
    }
    
    if (categories[difference] === undefined) {
      categories[difference] = [];
    }

    categories[difference].push(task);
  })

  categories = [completed, ...categories];

  return (
    <>
      <input type="text" placeholder="Enter task" value={name} onChange={(event) => handleChange(event, setTaskName)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="date" value={deadline} onChange={(event) => handleChange(event, setDeadline)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="number" placeholder="Enter task duration" value={duration} onChange={(event) => handleChange(event, setDuration)} onKeyPress={(event) => handleKeyPress(event)} />
      {categories.map((tasks, index) => {
        if (index > 0 && tasks !== undefined) {
          return (
            <>
              <p>{index - 1} days left</p>
              {tasks.map((task) => <Task key={task.id} task={task} onCheckboxClick={() => handleCheckboxClick(task)} />)}
            </>
          );
        } else if (tasks !== undefined && tasks.length > 0) {
          return (
            <>
              <p>Completed</p>
              {tasks.map((task) => <Task key={task.id} task={task} onCheckboxClick={() => handleCheckboxClick(task)} />)}
            </>
          )
        }
      })}
    </>
  );
}
