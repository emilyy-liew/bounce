import { Authenticator } from "@aws-amplify/ui-react";

import Layout from "../components/Layout";
import { Header } from "../components/Headers";

export const updatesText = "Update Authentication";

export default function HomePage() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <Layout signOut={signOut}>
          <Header title={updatesText}/>
        </Layout>
      )}
    </Authenticator>
  );
}
