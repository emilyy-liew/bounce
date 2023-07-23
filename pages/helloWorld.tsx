import { Authenticator } from "@aws-amplify/ui-react";

import Layout from "../components/Layout";
import Header from "../components/Header";

import "@aws-amplify/ui-react/styles.css";

export default function HomePage() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <Layout signOut={signOut}>
          <Header title="Hello World. 🌎" />
        </Layout>
      )}
    </Authenticator>
  );
}
