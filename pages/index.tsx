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
                <h1>Hello {user.username}</h1>
                <ToDoPage />
                <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}
