import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';

import ToDoPage from './ToDoPage';

import styles from "../styles/SignInPage.module.css";
import utilStyles from "../styles/utils.module.css";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

export default function Success() {

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                <ToDoPage user={user} signOut={signOut}/>
                <button onClick={signOut}>Sign Out</button>
                </main>
            )}
        </Authenticator>
    );
}
