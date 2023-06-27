import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Task from "./Task";
import Toggle from "./Toggle";

import styles from '../../styles/ToDoList.module.css';
import { render } from 'react-dom';

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [someday, setSomeday] = useState([]);
  const [name, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [duration, setDuration] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const test = ['hi', 'this', 'is', 'a', 'test'];

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
    let newCompleted = completed.slice();
    task.checked = !task.checked;

    if (task.taskDeadline == '') {
      let newSomeday = someday.slice();
      if (task.checked) {
        newCompleted.push(task);
        newSomeday = someday.filter((curr) => curr.id != task.id);
      } else {
        newSomeday.push(task);
        newCompleted = completed.filter((curr) => curr.id != task.id);
      }

      setSomeday(newSomeday);
    } else {
      let newTaskList = taskList.slice();

      if (task.checked) {
        newCompleted.push(task);
        newTaskList = taskList.filter((curr) => curr.id != task.id);
      } else {
        newTaskList.push(task);
        newCompleted = completed.filter((curr) => curr.id != task.id);
      }
  
      setTaskList(newTaskList);
    }
    
    setCompleted(newCompleted);
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      const newTask = {
        id: uuidv4(),
        taskName: name,
        taskDeadline: deadline,
        taskDuration: duration,
        checked: false
      }

      if (deadline === '') {
        let newSomeday = someday.slice();
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
    task.today = Math.ceil(task.taskDuration/(task.difference < 1 ? 1 : task.difference));
    difference = difference - Math.ceil(task.taskDuration / 30);
  
    if (difference < 1) {
      difference = 0;
    }
    
    if (categories[difference] === undefined) {
      categories[difference] = [];
    }

    categories[difference].push(task);
  })

  function renderList(list, label, visibility) {
    return (
      <div className={styles.container}>
        <Toggle label={label} initialVisiblility={visibility}>
          {list.map((task) => <Task key={task.id} task={task} onCheckboxClick={() => handleCheckboxClick(task)} />)}
        </Toggle>
      </div>
    )
  }

  return (
    <>
      <input type="text" placeholder="Enter task" value={name} onChange={(event) => handleChange(event, setTaskName)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="date" value={deadline} onChange={(event) => handleChange(event, setDeadline)} onKeyPress={(event) => handleKeyPress(event)} />
      <input type="number" placeholder="Enter task duration" value={duration} onChange={(event) => handleChange(event, setDuration)} onKeyPress={(event) => handleKeyPress(event)} />

      {completed.length > 0 ? renderList(completed, "Completed", true) : false}
      
      {categories.map((tasks, index) => {
        if (index) {
          return renderList(tasks, `${index} ${index === 1 ? "day" : "days"} left (${tasks.length})`, false);
        } else {
          return renderList(tasks, `0 days left (${tasks.length})`, true);
        }
      })}

      {someday.length > 0 ? renderList(someday, "Someday", false) : false}

    </>
  );
}
