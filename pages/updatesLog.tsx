import { Authenticator } from "@aws-amplify/ui-react";

import Layout from "../components/Layout";
import { Header } from "../components/Headers";

export const updatesText = "Update Authentication and IconBar globally";

export default function UpdateLog() {
  return (
    <Header title={updatesText}/>
  );
}
