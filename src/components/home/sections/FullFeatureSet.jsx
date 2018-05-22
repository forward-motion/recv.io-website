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

        this.setState({ loading: true, submitted: false }, () => {

            const data = {
                email: this.state.email,
                api_key: 'xumUkWFKu6JM5wr_6ZQ_wQ'
            };

            const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

            xhr.open('POST', 'https://api.convertkit.com/v3/forms/397809/subscribe');
            xhr.onreadystatechange = () => {

                if (xhr.readyState === XMLHttpRequest.DONE) {
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
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            xhr.send(JSON.stringify(data));
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
