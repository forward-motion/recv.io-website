import React from 'react';
import '../../../styles/blog/sections/Article.scss';
const Article = (props) => (
  <div className="component-article">
    <div className="row">
      <div className="col-md-12">
        <h3>{props.blogData.title}</h3>
        <span>{props.blogData.date}</span>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div style={{background:`url(${props.blogData.image})`, height:150, width:350}}></div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-8">
        <h3>{props.blogData.subtitle}</h3>
      </div>
    </div>

    <div className="article row">
      <div className="col-md-12">
        <span>{props.blogData.article}</span>
      </div>
    </div>
  </div>
);
export default Article;
