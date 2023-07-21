import { Authenticator } from "@aws-amplify/ui-react";

import IconBar from "../components/IconBar";
import Header from "../components/Header";

import utilStyles from "../styles/utils.module.css";
import "@aws-amplify/ui-react/styles.css";

export default function HomePage() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className={`${utilStyles.rowStack}`}>
          <IconBar signOut={signOut} />
          <div className={utilStyles.columnStack}>
            <Header title="Hello World. 🌎" />
          </div>
        </div>
      )}
    </Authenticator>
  );
}
