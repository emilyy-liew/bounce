import ToDoList from "../components/ToDoList";
import IconBar from "../components/IconBar";

import utilStyles from "../styles/utils.module.css";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  return (
    <div className={`${utilStyles.rowStack} ${utilStyles.background}`}>
      <IconBar />
      <div className={utilStyles.columnStack}>
        <Header title="Bounce. 🚀" />
        <ToDoList />
      </div>
    </div>
  );
}
