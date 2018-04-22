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
                    title="recv.io"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />

                <Header user={user} />

                <div>
                    {this.props.children({ ...this.props, user, firebase })}
                </div>
            </div>
        );
    }
}


export default DefaultTemplate;
