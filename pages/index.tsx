import ToDoList from "../components/todo/ToDoList";
import { Header } from "../components/Headers";

export default function HomePage(props: { user: any }) {
  return (
    <div>
      <Header title="Bounce. 🚀" />
      <ToDoList user={props.user} />
    </div>
  );
}
