import React from 'react';

import Footer from '../_global/ui/Footer';

import SecondaryHeader from '../_global/ui/SecondaryHeader';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

import '../../styles/dashboard/LoginPage.scss';

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
    <div className="login-page">

        <div className="row">
            <SecondaryHeader title='Dashboard' />
        </div>

        <div className="row">
            <div className="dashboard-label-section">

                <div className="title-wrapper">
                    <h2>Login with:</h2>
                    <div className="underline-accent"></div>
                </div>

            </div>
        </div>

        <div className="row" style={{backgroundColor : 'white'}}>

            <div className="firebase-button-wrapper">

                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

            </div>

        </div>

        <div className="row">
            <Footer user={'user'} dashboard={true} />
        </div>

    </div>
);

export default Login;