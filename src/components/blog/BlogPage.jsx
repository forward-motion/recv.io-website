import React, { Component } from 'react';
import BlogPreview from './BlogPreview';

import '../../styles/blog/BlogPage.scss';

export default class BlogPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="blog-page">
        <span> <h1>Blog Page </h1></span>
        <div className="row">
          <div className="article-list col-md-8">
            blog posts
            <BlogPreview />
          </div>
          <div className="aside col-md-4">
            <div className="search">Search</div>
            <div className="popular-articles">Popular Articles</div>
            <div className="social-media">Social Media</div>
            <div className="subscribe">Subscribe</div>
          </div>
        </div>
      </div>
    );
  }

}
