import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

import ToDoList from "../components/todo/ToDoList";
import Layout from "../components/Layout";
import { Header } from "../components/Headers";

Amplify.configure(awsconfig);

export default function Success() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Layout signOut={signOut}>
            <Header title="Bounce. 🚀" />
            <ToDoList user={user} />
        </Layout>
      )}
    </Authenticator>
  );
}
