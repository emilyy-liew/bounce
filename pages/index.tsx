import { Authenticator } from "@aws-amplify/ui-react";

import ToDoList from "../components/todo/ToDoList";
import Layout from "../components/Layout";
import { Header } from "../components/Headers";

export default function HomePage({ user }) {
  return (
    <div>
      <Header title="Bounce. 🚀" />
      <ToDoList user={user} />
    </div>
  );
}
