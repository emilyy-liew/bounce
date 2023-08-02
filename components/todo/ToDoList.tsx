import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import Task, { TaskItem } from "./Task";
import Collapsible from "../Collapsible";
import { getData, updateData } from "../../functions/serverRequests";

import styles from "../../styles/ToDoList.module.css";
import utilStyles from "../../styles/utils.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import InEditTask from "./InEditTask";

const localizer = momentLocalizer(moment);

export default function ToDoList(props: { user: any }) {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const [completed, setCompleted] = useState<TaskItem[]>([]);
  const [someday, setSomeday] = useState<TaskItem[]>([]);
  const [name, setName] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [duration, setDuration] = useState<number | string>("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentTask, setCurrentTask] = useState<TaskItem>(null);
  const [dataInitialized, setDataInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(props.user.username);
        setCompleted(data.Item.completed);
        setSomeday(data.Item.someday);
        setTaskList(data.Item.taskList);
        setDataInitialized(true);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const update = async () => {
      try {
        if (dataInitialized) {
          await updateData(props.user.username, "completed", completed);
          await updateData(props.user.username, "someday", someday);
          await updateData(props.user.username, "taskList", taskList);
        }
      } catch (error) {
        console.log(error);
      }
    };

    update();
  }, [dataInitialized, completed, someday, taskList]);

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

  function handleCheckboxClick(task: TaskItem) {
    task.checked = !task.checked;
    if (task.deadline === "") {
      updateLists(
        task,
        someday.slice(),
        setSomeday,
        completed.slice(),
        task.checked
      );
    } else {
      updateLists(
        task,
        taskList.slice(),
        setTaskList,
        completed.slice(),
        task.checked
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

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      const newTask: TaskItem = {
        id: uuidv4(),
        name: name,
        deadline: deadline,
        duration:
          duration === "" || Number(duration) < 0 ? 0 : Number(duration),
        timeSpent: 0,
        isRunning: false,
        checked: false,
        time: 0,
        inEditMode: false,
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
      setDuration("");
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

  function handleEdit(task: TaskItem) {
    if (completed.some((curr) => curr.id === task.id)) {
      handleEditHelper(completed, setCompleted, task);
    } else if (taskList.some((curr) => curr.id === task.id)) {
      handleEditHelper(taskList, setTaskList, task);
    } else if (someday.some((curr) => curr.id === task.id)) {
      handleEditHelper(someday, setSomeday, task);
    }
  }

  function handleEditHelper(list: TaskItem[], setter, task: TaskItem) {
    const newList = list.slice();
    newList.forEach((curr) => {
      if (curr.id === task.id) {
        curr.name = task.name;
        curr.deadline = task.deadline;
        curr.inEditMode = !curr.inEditMode;
      }
    });
    setter(newList);
  }

  function renderList(list: TaskItem[], label: string, length: number) {
    return (
      <div className={`${styles.container} ${utilStyles.container}`}>
        <Collapsible
          label={
            <span>
              {label} <span className={utilStyles.subtext}>({length})</span>
            </span>
          }
          children={list.map((task) =>
            !task.inEditMode ? (
              <Task
                key={task.id}
                task={task}
                onCheckboxChange={(task) => handleCheckboxClick(task)}
                onStopClick={handleStop}
                onPlayClick={() => handlePlay(task)}
                onPauseClick={handlePause}
                onEditClick={() => handleEdit(task)}
              />
            ) : (
              <InEditTask
                key={task.id}
                task={task}
                onCheckboxChange={(task) => handleCheckboxClick(task)}
                onStopClick={handleStop}
                onPlayClick={() => handlePlay(task)}
                onPauseClick={handlePause}
                onEditClick={handleEdit}
              />
            )
          )}
          visible
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
      task.timeSpent += time;
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

  function handlePause(time: number, task: TaskItem) {
    task.isRunning = false;
    if (taskList.includes(task)) {
      let newTaskList = taskList.slice();
      for (let i = 0; i < newTaskList.length; i++) {
        if (newTaskList[i].id === task.id) {
          newTaskList[i].time = time;
        }
      }
      setTaskList(newTaskList);
    } else if (someday.includes(task)) {
      let newSomeday = someday.slice();
      for (let i = 0; i < newSomeday.length; i++) {
        if (newSomeday[i].id === task.id) {
          newSomeday[i].time = time;
        }
      }
      setSomeday(newSomeday);
    } else {
      let newCompleted = completed.slice();
      for (let i = 0; i < newCompleted.length; i++) {
        if (newCompleted[i].id === task.id) {
          newCompleted[i].time = time;
        }
      }
      setCompleted(newCompleted);
    }
  }

  return (
    <>
      <div className={utilStyles.justifyCenter}>
        <input
          type="text"
          placeholder="Enter task"
          value={name}
          onChange={(event) => handleChange(event, setName)}
          onKeyDown={(event) => handleKeyDown(event)}
          className={styles.textInput}
        />
        <input
          type="date"
          value={deadline}
          onChange={(event) => handleChange(event, setDeadline)}
          onKeyDown={(event) => handleKeyDown(event)}
          className={styles.dateInput}
        />
        <input
          type="number"
          placeholder="Enter task duration in mins"
          min="0"
          value={duration}
          onChange={(event) => handleChange(event, setDuration)}
          onKeyDown={(event) => handleKeyDown(event)}
          className={styles.number}
        />
      </div>
      <div className={utilStyles.rowEvenSpace}>
        <div className={`${utilStyles.columnStack} ${styles.tasks}`}>
          {completed.length > 0 &&
            renderList(completed, "Completed", completed.length)}

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

          {someday.length > 0 && renderList(someday, "Someday", someday.length)}
        </div>
        <Calendar
          className={styles.calendar}
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          step={15}
          timeslots={4}
        />
      </div>
    </>
  );
}
