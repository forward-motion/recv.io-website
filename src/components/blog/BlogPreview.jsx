import React, { Component } from 'react';
import '../../styles/blog/BlogPreview.scss';

export default class BlogPreview extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="blog-preview">
        <h2>{this.props.title}</h2>
        <span>{this.props.date}</span>
        <div style={{background:"url(http://via.placeholder.com/350x150)", height:150, width:350}}></div>
        <div>{this.props.article}</div>
      </div>
    );
  }

}
