import React from 'react';
import '../../../styles/blog/sections/Article.scss';
const Article = (props) => (
  <div className="component-article">
    <div className="blog-preview-inner">
      <div className="article-title-wrapper">
        <span className="article-title">{props.blogData.title}</span>
        <div className="article-title-seperator"></div>
      </div>
      <span className="date"> Date {props.blogData.date}</span>
      <div className="image-wrapper" style={{background:`url(${props.blogData.image})`}}> </div>
      <div className="article">{props.blogData.article}</div>
    </div>
  </div>
);
export default Article;
