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

function FullFeatureSet() {

    return (
        <div className="component-full-feature-set">
            <div className="row">
                <div className="col-xs-12">
                    <h4 className="feature-text">We're currently in <strong>closed beta</strong>. Get notified when we launch below!</h4>
                </div>
                <div className="col-xs-12">
                    <form className="form-inline" id="launch-form">
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="your email address" />
                        </div>
                        <button type="submit" className="btn">Notify Me</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FullFeatureSet;
