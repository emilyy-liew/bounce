import ToDoList from "../components/todo/ToDoList";
import { Header } from "../components/Headers";

export default function HomePage({ user }) {
  return (
    <div>
      <Header title="Bounce. 🚀" />
      <ToDoList user={user} />
    </div>
  );
}
