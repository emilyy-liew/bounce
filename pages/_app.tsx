import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

import Layout from "../components/Layout";

import "../styles/global.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return (
      <Authenticator>
        {({ signOut, user }) => (
          <Layout signOut={signOut}>
            <Component user={user} {...pageProps} />
          </Layout>
        )}
      </Authenticator>
    );
}
