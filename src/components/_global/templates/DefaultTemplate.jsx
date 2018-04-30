import React from 'react';
import Helmet from 'react-helmet';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import firebase from 'firebase';
import 'firebase/auth';

import '../../../styles/_global/templates/DefaultTemplate.scss';

const config = {
    apiKey: "AIzaSyC2lRzsZXLxmRaDgqXWQY0US7M2tifThMM",
    authDomain: "recvio-d97fa.firebaseapp.com",
    //authDomain: "localhost:8000/dashboard/",
    databaseURL: "https://recvio-d97fa.firebaseio.com",
    projectId: "recvio-d97fa",
    storageBucket: "recvio-d97fa.appspot.com",
    messagingSenderId: "737676431916"
};

firebase.initializeApp(config);

class DefaultTemplate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });
    }

    componentWillUnmount() {
        //this.unregisterAuthObserver();
    }

    render() {

        const { user } = this.state;

        return (
            <div className="default-template">
                <Helmet
                    title="recv.io - A fully-hosted, durable, distributed pub/sub network."
                    meta={[
                        { name: 'description', content: 'A fully-hosted, durable, distributed pub/sub network.' },
                        { name: 'keywords', content: 'recv.io, realtime, pubsub, socket.io' },
                    ]}
                >

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#55cb3d" />
                    <meta name="msapplication-TileColor" content="#223047" />
                    <meta name="theme-color" content="#223047" />
                    <meta property="og:url" content="https://recv.io" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="recv.io" />
                    <meta property="og:description" content="A fully-hosted, durable, distributed pub/sub network." />
                    <meta property="og:image" content="/recv-icon.png" />

                </Helmet>

                <Header user={user} />

                <div>
                    {this.props.children({ ...this.props, user, firebase })}
                </div>
            </div>
        );
    }
}


export default DefaultTemplate;
