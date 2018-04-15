import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import Link from 'gatsby-link';
import SideBar from './sections/SideBar'
import BlogPreview from './sections/BlogPreview';
import '../../styles/blog/BlogPage.scss';




export default class BlogPage extends Component {

  get showBlogs() {
    return(
      this.props.blogData.map((article)=>{
        return(
          <Link style={{ textDecoration: 'none' }} key={article.id} to="#">
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

  render() {
    return(
      <div className="component-blog-page container-fluid">
        <div className="row">
          <div className="article-list col-md-8">
            {this.showBlogs}
          </div>
          <SideBar />
        </div>
      </div>
    );
  }
}
BlogPage.defaultProps = {
  blogData:[
    {
      id:1,
      title: "Article Title 1",
      subtitle: "subtitle",
      date: "01/01/18",
      image: "http://via.placeholder.com/800x250",
      article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },{
      id:2,
      title: "Article Title 2",
      subtitle: "subtitle",
      date: "01/02/18",
      image: "http://via.placeholder.com/800x250",
      article:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}]
}
