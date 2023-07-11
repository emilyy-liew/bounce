"use client"

import ToDoList from "./components/ToDoList";
import IconBar from "./components/IconBar";

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Header title="Hello World. 🌎" />
      <IconBar />
      <ToDoList />
    </div>
  );
}
