import React from 'react';
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

        <h1>Login</h1>

        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

    </div>
);

export default Login;