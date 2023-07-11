import ToDoList from "../components/ToDoList";
import IconBar from "../components/IconBar";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Header title="Bounce. 🚀" />
      <IconBar />
      <ToDoList />
    </div>
  );
}
