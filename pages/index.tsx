import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

import ToDoList from "../components/ToDoList";
import IconBar from "../components/IconBar";
import Header from "../components/Header";

import styles from "../styles/Pages.module.css"
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

                <div className={`${utilStyles.columnStack} ${utilStyles.leftMargin}`}>
                  <Header title="Bounce. 🚀" />
                  <ToDoList user={user} />
                </div>

                <div className={styles.updateText}>
                  <a
                    href="https://github.com/emilyy-liew/bounce/tree/main"
                    target="_blank" /* Opens the link in a new tab */
                    rel="noopener noreferrer" /* Recommended for security */
                    className={styles.underlinedText}
                  >
                    Bounce July 22, 2023 Version:
                  </a>
                  {" "}Added this text and updated rocket ship icon to fit entire image.
                </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}
