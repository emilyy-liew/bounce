import { useState } from 'react';
import ToDoList from './components/toDoList';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
    <Header title="Develop. Preview. Ship. 🚀" />
    <ToDoList />

    <button onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}