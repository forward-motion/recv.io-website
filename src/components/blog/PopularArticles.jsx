import React, { Component } from 'react';
import Link from 'gatsby-link';
import '../../styles/blog/PopularArticles.scss';

const articleLinks = (props) => {
  return props.articles.map((article)=>{
    return(
      <Link to="#">
        <div key={article.id} className="article-link">
          <h4>{article.title}</h4>
          <span>{article.date}</span>
        </div>
      </Link>
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
