import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/home/sections/FullFeatureSet.scss';

// import WildcardsQueues from './WildcardsQueues';
//
// class FullFeatureSet extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             clicked: false
//         };
//
//         this.onClick = this.onClick.bind(this);
//     }
//
//     onClick(e) {
//         e.preventDefault();
//         this.setState({clicked: true});
//     }
//
//     render() {
//
//         if (this.state.clicked) {
//             return <WildcardsQueues />
//         }
//         return (
//             <div className="component-full-feature-set">
//                 <span className="feature-text">see more examples <a href="#" onClick={this.onClick}>here</a>.</span>
//             </div>
//         );
//     }
// }


class FullFeatureSet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loading: false,
            submitted: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ email: e.currentTarget.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const { email } = this.state;

        const url = `https://recv.us18.list-manage.com/subscribe/post-json?u=c47bcee550c62287336362beb&amp;id=ce4d0d234e&EMAIL=${email}`;

        this.setState({ loading: true }, () => {

            const xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = () => {

                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    this.setState({
                        loading: false,
                        submitted: true
                    });
                } else {
                    this.setState({
                        loading: false,
                        submitted: false
                    });
                }
            };

            xmlhttp.open('GET', url, true);
            xmlhttp.send();
        });
    }

    render() {
        return (
            <div className="component-full-feature-set">
                <div className="row">
                    <div className="col-xs-12">
                        <h4 className="feature-text">We're currently in <strong style={{textDecoration: 'underline'}}>closed beta</strong>.<br />Sign up below to get notified when we launch!</h4>
                    </div>
                    <div className="col-xs-12">
                        <form className="form-inline" id="launch-form" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="your email address"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button disabled={this.state.loading} type="submit" className="btn">
                                {this.state.submitted ? 'Success!' : 'Notify Me'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default FullFeatureSet;
