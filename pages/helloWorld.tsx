import IconBar from "../components/IconBar";
import Header from "../components/Header";

import utilStyles from "../styles/utils.module.css";

export default function HomePage() {
  return (
    <div className={`${utilStyles.rowStack}`}>
      <IconBar />
      <div className={utilStyles.columnStack}>
        <Header title="Hello World. 🌎" />
      </div>
    </div>
  );
}
