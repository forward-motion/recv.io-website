import React, { Component } from 'react'; 
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import moment from 'moment';

import '../../styles/examples/ExamplesPage.scss';

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

class ExamplesPage extends Component {
    constructor(props) {
        super(props); 

        this.basic_examples = [
            {
                app: 'Chat App',
                icon: 'icon-chat',
                tag: 'simple chat example'
            },
            {
                app: 'MapApp',
                icon: 'icon-map',
                tag: 'real-time position tracking'
            },
            {
                app: 'Website',
                icon: 'icon-website',
                tag: 'with notifications'
            }
        ]; 

        this.advance_examples = [
            {
                app: 'WhatSlack',
                icon: 'icon-whatslack',
                tag: 'a fully featured chat client'
            },
            {
                app: '{x}uber',
                icon: 'icon-x-uber',
                tag: 'uber for “x”'
            },
            {
                app: 'GitFeed',
                icon: 'icon-gitfeed',
                tag: 'turn GitHub into a social network'
            }
        ];
    }

    get basicExamples() {
        return this.basic_examples.map((example) => {
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="app-wrapper">
                                <div className="col-md-2">
                                    <p className="icons"><span className={ example.icon }></span></p>
                                </div>
                                <div className="col-md-10">
                                    <p className="app-name"> {example.app} </p>
                                    <p className="app-tag"> {example.tag} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    get advanceExamples() {
        return this.advance_examples.map((example) => {
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="app-wrapper">
                                <div className="col-md-2">
                                    <p className="icons"><span className={example.icon}></span></p>
                                </div>
                                <div className="col-md-10">
                                    <p className="app-name"> {example.app} </p>
                                    <p className="app-tag"> {example.tag} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }



    render() {

        return(
            <div className="examples-page">
                <div className="row">
                    <div className="col-md-12 secondary-background">
                        <p className="subtitle">Examples</p>
                    </div>
                </div>

                <div className="row">
                    <div style={{ width: '860px', margin: '0 auto', marginTop: '40px', height: '63vh'}}>
                        <div className="row">
                            <div className="col-md-6">
                                <div style={{ width: '100px', margin: '0 auto'}}>
                                    <h3>basic</h3>
                                    <div className="accent-underline"></div>
                                </div>
                               { this.basicExamples }
                            </div>
                            <div className="col-md-6">
                                <div style={{ width: '100px', margin: '0 auto' }}>
                                    <h3>advance</h3>
                                    <div className="accent-underline"></div>
                                </div>
                                { this.advanceExamples }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="examples-page-footer">
                        <div className="col-xs-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="call-to-action-sign-up">Ready to recv<span>?</span> Sign up for <b>free</b> with</p>
                                </div>
                            </div>

                            <div className="row">
                                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <p className="copy-right">© {moment().year()} - recv.io All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExamplesPage; 