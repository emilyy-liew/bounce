import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

import ToDoList from "../components/ToDoList";
import IconBar from "../components/IconBar";
import Header from "../components/Header";

import utilStyles from "../styles/utils.module.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

export default function Success() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className={utilStyles.rowStack}>
            <IconBar signOut={signOut} />

            <div className={utilStyles.columnStack}>
              <Header title="Bounce. 🚀" />
              <ToDoList user={user} />
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}
