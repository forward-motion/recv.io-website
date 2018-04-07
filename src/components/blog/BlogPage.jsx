import React, { Component } from 'react';
import BlogPreview from './BlogPreview';

import '../../styles/blog/BlogPage.scss';

let blogData = [
  {
    id:1,
    title: "title article 1",
    subtitle: "subtitle",
    date: "2017_01_01",
    image: "http://via.placeholder.com/350x150",
    article:"Lorem ipsum"
  },{
    id:2,
    title: "title article 2",
    subtitle: "subtitle",
    date: "2017_01_02",
    image: "placeholder link",
    article:"Lorem ipsum"
  }];


export default class BlogPage extends Component {
  constructor(props) {
    super(props)
  }
  get showBlogs() {
    return(
      blogData.map((article)=>{
        return(
          <BlogPreview
              title={article.title}
              subtitle={article.subtitle}
              date={article.date}
              article={article.article}/>
        );
      })
    );
  }
  render() {
    return(
      <div className="blog-page">
        <span> <h1>Blog Page </h1></span>
        <div className="row">
          <div className="article-list col-md-8">
            blog posts
            {this.showBlogs}
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
