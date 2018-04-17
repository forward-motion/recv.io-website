import React, { Component } from 'react';
import SideBar from './sections/SideBar';
import Article from './sections/Article';
import Helmet from 'react-helmet';
import '../../styles/blog/ArticlePage.scss';

export default class ArticlePage extends Component {
  get renderArticle() {
    return <Article blogData={this.props.blogData} />
  }
  render(){
    return(
      <div className="component-article-page container-fluid">
          <Helmet
              title="recv.io - title goes here"
              meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
              ]}
          />
          <div>
            <SideBar article={this.renderArticle} />
          </div>

      </div>
    );
  }
}


ArticlePage.defaultProps = {
  blogData:{
    id:1,
    title: "Title Article 1",
    subtitle: "Subtitle",
    date: "01/01/2018",
    image: "http://via.placeholder.com/700x250",
    article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
}
