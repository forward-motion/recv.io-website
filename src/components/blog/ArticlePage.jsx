import React, { Component } from 'react';
import EmailSubscribe from './EmailSubscribe';
import Helmet from 'react-helmet';

import '../../styles/blog/ArticlePage.scss';

export default class ArticlePage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="article-page container">
          <Helmet
              title="recv.io - title goes here"
              meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
              ]}
          />
          <div className="row">
            <div className="col-md-12">
              <h2>Article Page</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3>{this.props.blogData.title}</h3>
              <span>{this.props.blogData.date}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div style={{background:`url(${this.props.blogData.image})`, height:150, width:350}}></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <h3>{this.props.blogData.subtitle}</h3>
            </div>
            <div className="col-md-4">
              <EmailSubscribe />
            </div>
          </div>

          <div className="article row">
            <div className="col-md-12">
              <span>{this.props.blogData.article}</span>
            </div>
          </div>

      </div>
    );
  }
}


ArticlePage.defaultProps = {
  blogData:{
    id:1,
    title: "title article 1",
    subtitle: "subtitle",
    date: "2017_01_01",
    image: "http://via.placeholder.com/350x150",
    article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
}
