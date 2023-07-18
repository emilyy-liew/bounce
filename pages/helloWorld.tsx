import { useEffect } from "react";

import IconBar from "../components/IconBar";
import { getData } from "./api/tasklists";

import utilStyles from "../styles/utils.module.css";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  return (
    <div className={`${utilStyles.rowStack} ${utilStyles.background}`}>
      <IconBar />
      <div className={utilStyles.columnStack}>
        <Header title="Hello World. 🌎" />
      </div>
    </div>
  );
}
