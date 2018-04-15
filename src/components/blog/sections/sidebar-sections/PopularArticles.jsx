import React, { Component } from 'react';
import Link from 'gatsby-link';
import '../../../../styles/blog/sections/PopularArticles.scss';

const articleLinks = (props) => {
  return props.articles.map((article)=>{
    return(
      <Link key={article.id} to="#">
        <div className="article-link">
          <h4>{article.title}</h4>
          <span>{article.date}</span>
        </div>
      </Link>
    );
  })
}

const PopularArticles = (props) => {

  return(
    <div className="component-popular-articles">
      <h3> Popular Articles </h3>
      {articleLinks(props)}
    </div>
  );

};
export default PopularArticles;
