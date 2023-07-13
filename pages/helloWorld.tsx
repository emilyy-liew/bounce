import { useEffect } from "react";
import IconBar from "../components/IconBar";
import { getData } from "./api/tasklists";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Header title="Hello World. 🌎" />
      <IconBar />
    </div>
  );
}
