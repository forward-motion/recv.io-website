import React, { Component } from 'react';

import '../../../../styles/blog/sections/sidebar-sections/EmailSubscribe.scss';

export default class EmailSubscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateEmail(e) {
    //@TODO: preventDefault() not working
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  render() {
    return(
        <div className="component-email-subscribe">
          <h3 className="email-subscribe-title"> Subscribe </h3>
          <form>
            <input
              onChange={(e)=>this.updateEmail(e)}
              value={this.state.email}
              placeholder="E-mail"
              className="subscribe-input" />
          </form>
        </div>
    );
  }

}
