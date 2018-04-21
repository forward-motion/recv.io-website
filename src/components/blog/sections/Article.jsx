import React from 'react';
import ReadSignUp from './ReadSignUp';

import '../../../styles/blog/sections/Article.scss';
const Article = (props) => (
  <div className="component-article">
    <div className="blog-preview-inner">
      <div className="article-title-wrapper">
        <span className="article-title">{props.blogData.title}</span>
        <div className="article-title-seperator"></div>
      </div>
      <span className="date"> Date {props.blogData.date}</span>
      <div className="image-wrapper">
        <img className="img-responsive" src={props.blogData.image} /> 
      </div>
      <div className="subtitle">{props.blogData.subtitle}</div>
      <div className="article">{props.blogData.article}</div>
      <div className="">
        <ReadSignUp />
      </div>
    </div>

  </div>
);
export default Article;
