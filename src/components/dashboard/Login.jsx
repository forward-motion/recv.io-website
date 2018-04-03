import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../styles/dashboard/LoginPage.scss';

const Login = (props) => (
    <div className="login-page">

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

    </div>
);

export default Login;