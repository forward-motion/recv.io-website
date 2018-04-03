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

        <div className="row">
            <div className="col-md-12">
                <h1>Login with</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <button 
                    className="btn btn-default"
                    onClick={() => props.onUserLogin( 'git' )}
                    >
                    <i className="fa fa-github"></i>
                </button>
            </div>
            <div className="col-md-4">
                <button className="btn btn-default"
                onClick={() => props.onUserLogin( 'bitbucket' )}
                >
                <i className="fa fa-bitbucket"></i>
                </button>
            </div>
            <div className="col-md-4">
                <button className="btn btn-default"
                onClick={() => props.onUserLogin( 'google' )}
                >
                <i className="fa fa-google"></i>
                </button>
            </div>
        </div>

        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

    </div>
);

export default Login;