import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import BlogPreview from './BlogPreview';
import PopularArticles from './PopularArticles';
import EmailSubscribe from './EmailSubscribe';
import Link from 'gatsby-link';

import '../../styles/blog/BlogPage.scss';

let blogData = [
  {
    id:1,
    title: "title article 1",
    subtitle: "subtitle",
    date: "2017_01_01",
    image: "http://via.placeholder.com/350x150",
    article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },{
    id:2,
    title: "title article 2",
    subtitle: "subtitle",
    date: "2017_01_02",
    image: "http://via.placeholder.com/350x150",
    article:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
  }];


export default class BlogPage extends Component {
  constructor(props) {
    super(props);
  }

  get showBlogs() {
    return(
      blogData.map((article)=>{
        return(
          <Link key={article.id} to="#">
            <BlogPreview
                title={article.title}
                subtitle={article.subtitle}
                date={article.date}
                image={article.image}
                article={article.article}/>
          </Link>
        );
      })
    );
  }
  get renderSocialMedia() {
    return(
      <div className="row">
        <div className="social-icon col-md-4">
          <a href="#"> fb </a>
        </div>
        <div className="social-icon col-md-4">
          <a href="#">tw</a>
        </div>
        <div className="social-icon col-md-4">
          <a href="#">other</a>
        </div>
      </div>
    );
  }
  render() {
    return(
      <div className="blog-page container">
        <span> <h1>Blog Page </h1></span>
        <div className="row">
          <div className="article-list col-md-8">
            {this.showBlogs}
          </div>
          <div className="aside col-md-4">
            <div className="search"><VirtualizedSelect /></div>
            <div className="popular-articles">
              <h3> Popular Articles </h3>
              <PopularArticles articles={blogData}/>
            </div>
            <div className="social-media">
              <h3> Social Media </h3>
              {this.renderSocialMedia}
            </div>
              <EmailSubscribe />
          </div>
        </div>
      </div>
    );
  }

}
