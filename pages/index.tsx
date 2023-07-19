import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import utilSytles from "../styles/utils.module.css";
import styles from "../styles/SignInPage.module.css";
import ToDoPage from './ToDoPage';

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