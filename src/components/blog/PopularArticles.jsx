import React, { Component } from 'react';
import '../../styles/blog/PopularArticles.scss';

const articleLinks = (props) => {
  return props.articles.map((article)=>{
    return(
      <div key={article.id} className="article-link">
        <h4>{article.title}</h4>
        <span>{article.date}</span>
      </div>
    );
  })
}

const PopularArticles = (props) => {

  return(
    <div className="popular-articles">
      {articleLinks(props)}
    </div>
  );

};
export default PopularArticles;
