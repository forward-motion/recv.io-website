import React from 'react';

import SecondaryHeader from '../_global/ui/SecondaryHeader';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccess: () => false
    }
};

const Login = ({ firebase }) => (
    <div>

        <div className="row">
            <SecondaryHeader title='Dashboard' />
        </div>

        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

    </div>
);

export default Login;