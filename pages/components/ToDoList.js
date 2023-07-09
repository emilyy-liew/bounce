import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Task from "./Task";
import Toggle from "./Toggle";

import styles from '../../styles/ToDoList.module.css';

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [someday, setSomeday] = useState([]);
  const [name, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [duration, setDuration] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      if (newDate.getDate() !== currentDate.getDate()) {
        setCompleted([]);
      }
      setCurrentDate(newDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleCheckboxClick(task) {
    task.checked = !task.checked;

    if (task.taskDeadline === '') {
      updateLists(task, someday.slice(), setSomeday, completed.slice());
    } else {
      updateLists(task, taskList.slice(), setTaskList, completed.slice());
    }
  }

  function updateLists(task, list, setter, newCompleted) {
    if (task.checked) {
      newCompleted.push(task);
      list = list.filter((curr) => curr.id != task.id);
    } else {
      list.push(task);
      newCompleted = newCompleted.filter((curr) => curr.id != task.id);
    }

    setter(list);
    setCompleted(newCompleted);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      const newTask = {
        id: uuidv4(),
        taskName: name,
        taskDeadline: deadline,
        taskDuration: duration === '' || duration < 0 ? 0 : duration,
        checked: false
      }

      if (deadline === '') {
        let newSomeday = someday.slice();
        newTask.today = newTask.taskDuration;
        newSomeday.push(newTask);
        setSomeday(newSomeday)
      } else {
        let newTaskList = taskList.slice();
        newTaskList.push(newTask);
        setTaskList(newTaskList);
      }
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
    task.today = Math.ceil(task.taskDuration/(difference < 1 ? 1 : difference));
    difference = difference - Math.ceil(task.taskDuration / 30);
    if (difference < 1) {
      difference = 0;
    }
    
    if (categories[difference] === undefined) {
      categories[difference] = [];
    }

    task.difference = difference;
    categories[difference].push(task);
  })

  function renderList(list, label, length) {
    return (
      <div className={styles.container}>
        <Toggle label={label} length={length}>
          {list.map((task) => <Task key={task.id} task={task} onCheckboxClick={() => handleCheckboxClick(task)} onStopClick={handleStop} onPlayClick={() => handlePlay(task)}/>)}
        </Toggle>
      </div>
    )
  }

  function handlePlay(task) {
    if (currentTask !== null && currentTask !== task) {
      currentTask.isRunning = false;
    }

    task.isRunning = true;
    setCurrentTask(task);
  }

  function handleStop(time, task) {
    const deadline = new Date(task.taskDeadline);

    task.taskDuration -= Math.floor(time / 60);
    if (task.taskDuration < 0) {
      task.taskDuration = 0;
    }

    let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    task.today = Math.ceil(task.taskDuration/(difference < 1 ? 1 : difference));
    difference = difference - Math.ceil(task.taskDuration / 30);

    categories[task.difference] = categories[task.difference].filter((curr) => {curr.id != task.id})
    task.difference = difference;

    if (categories[difference] === undefined) {
      categories[difference] = [];
    }

    categories[difference].push(task);
  }

  return (
    <>
      <input type="text" placeholder="Enter task" value={name} onChange={(event) => handleChange(event, setTaskName)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="date" value={deadline} onChange={(event) => handleChange(event, setDeadline)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="number" placeholder="Enter task duration" min="0" value={duration} onChange={(event) => handleChange(event, setDuration)} onKeyPress={(event) => handleKeyPress(event)} />

      {completed.length > 0 ? renderList(completed, `Completed`, completed.length) : false}
      
      {categories.map((tasks, index) => {
        if (index) {
          return renderList(tasks, `${index} ${index === 1 ? "day" : "days"} left`, tasks.length);
        } else {
          return renderList(tasks, `0 days left`, tasks.length);
        }
      })}

      {someday.length > 0 ? renderList(someday, `Someday`, someday.length) : false}

    </>
  );
}
