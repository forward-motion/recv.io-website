import React, { Component } from 'react';
import Link from 'gatsby-link';
import '../../../../styles/blog/sections/sidebar-sections/PopularArticles.scss';

const articleLinks = (props) => {
  return props.articles.map((article)=>{
    return(
      <Link key={article.id} to="#">
        <div className="article-link">
          <span className="article-title">{article.title}</span><br/>
          <span className="article-date">Date {article.date}</span>
        </div>
      </Link>
    );
  })
}

const PopularArticles = (props) => {

  return(
    <div className="component-popular-articles">
      <h3 className="article-section-title"> Popular Articles </h3>
      {articleLinks(props)}
      <div className="seperator-articles"></div>
    </div>
  );

};
export default PopularArticles;
