import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Task from "./Task";
import { TaskItem } from "./Task";
import Toggle from "./Toggle";
import { getData } from "../pages/api/tasklists";

import styles from "../styles/ToDoList.module.css";
import utilStyles from "../styles/utils.module.css";

export default function ToDoList() {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const [completed, setCompleted] = useState<TaskItem[]>([]);
  const [someday, setSomeday] = useState<TaskItem[]>([]);
  const [name, setName] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentTask, setCurrentTask] = useState<TaskItem>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("emilyliew");
        setCompleted(
          convertListToTaskList(data.Item.completed.L.map((item) => item.M))
        );
        setSomeday(
          convertListToTaskList(data.Item.someday.L.map((item) => item.M))
        );
        setTaskList(
          convertListToTaskList(data.Item.taskList.L.map((item) => item.M))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function convertListToTaskList(list) {
    return list.map((task) => {
      task.id = task.id.S;
      task.name = task.taskName.S;
      task.deadline = task.taskDeadline.S;
      task.duration = task.taskDuration.N;
      task.isRunning = task.isRunning.BOOL;
      task.checked = task.checked.BOOL;
      return task;
    });
  }

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

  function handleCheckboxClick(event, task: TaskItem) {
    task.checked = event.target.checked;
    if (task.deadline === "") {
      updateLists(
        task,
        someday.slice(),
        setSomeday,
        completed.slice(),
        event.target.checked
      );
    } else {
      updateLists(
        task,
        taskList.slice(),
        setTaskList,
        completed.slice(),
        event.target.checked
      );
    }
  }

  function updateLists(
    task: TaskItem,
    list: TaskItem[],
    setter: React.Dispatch<React.SetStateAction<TaskItem[]>>,
    newCompleted: TaskItem[],
    execute: boolean
  ) {
    if (execute) {
      newCompleted.push(task);
      list = list.filter((curr) => curr.id !== task.id);
    } else {
      list.push(task);
      newCompleted = newCompleted.filter((curr) => curr.id !== task.id);
    }

    setter(list);
    setCompleted(newCompleted);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      const newTask: TaskItem = {
        id: uuidv4(),
        name: name,
        deadline: deadline,
        duration: duration === undefined || duration < 0 ? 0 : duration,
        isRunning: false,
        checked: false,
      };

      if (deadline === "") {
        let newSomeday = someday.slice();
        newTask.today = newTask.duration;
        newSomeday.push(newTask);
        setSomeday(newSomeday);
      } else {
        let newTaskList = taskList.slice();
        newTaskList.push(newTask);
        setTaskList(newTaskList);
      }
      setName("");
      setDeadline("");
      setDuration(undefined);
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) {
    setter(event.target.value);
  }

  let categories: TaskItem[][] = [];
  taskList.map((task) => {
    const deadline = new Date(task.deadline);
    let difference = Math.floor(
      (deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));
    difference = difference - Math.ceil(task.duration / 30);
    if (difference < 1) {
      difference = 0;
    }

    if (categories[difference] === undefined) {
      categories[difference] = [];
    }

    task.difference = difference;
    categories[difference].push(task);
  });

  function renderList(list: TaskItem[], label: string, length: number) {
    return (
      <div className={styles.container}>
        <Toggle
          label={label}
          length={length}
          children={list.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCheckboxChange={(event) => handleCheckboxClick(event, task)}
              onStopClick={handleStop}
              onPlayClick={() => handlePlay(task)}
            />
          ))}
        />
      </div>
    );
  }

  function handlePlay(task: TaskItem) {
    if (currentTask && currentTask !== task) {
      currentTask.isRunning = false;
    }

    task.isRunning = true;
    setCurrentTask(task);
  }

  function handleStop(time: number, task: TaskItem) {
    if (taskList.includes(task)) {
      const deadline = new Date(task.deadline);

      task.duration -= Math.floor(time / 60);
      if (task.duration < 0) {
        task.duration = 0;
      }

      let difference = Math.floor(
        (deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));
      difference = difference - Math.ceil(task.duration / 30);
      categories[task.difference] = categories[task.difference].filter(
        (curr) => curr.id !== task.id
      );
      task.difference = difference;

      if (categories[difference] === undefined) {
        categories[difference] = [];
      }

      categories[difference].push(task);
    }
  }

  return (
    <>
      <div className={utilStyles.rowStack}>
        <input
          type="text"
          placeholder="Enter task"
          value={name}
          onChange={(event) => handleChange(event, setName)}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(event) => handleChange(event, setDeadline)}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <input
          type="number"
          placeholder="Enter task duration in mins"
          min="0"
          value={duration}
          onChange={(event) => handleChange(event, setDuration)}
          onKeyPress={(event) => handleKeyPress(event)}
        />
      </div>

      {completed.length > 0
        ? renderList(completed, `Completed`, completed.length)
        : false}

      {categories.map((tasks, index) => {
        if (index && tasks !== undefined) {
          return renderList(
            tasks,
            `${index} ${index === 1 ? "day" : "days"} left`,
            tasks.length
          );
        } else {
          return renderList(tasks, `0 days left`, tasks.length);
        }
      })}

      {someday.length > 0
        ? renderList(someday, `Someday`, someday.length)
        : false}
    </>
  );
}
