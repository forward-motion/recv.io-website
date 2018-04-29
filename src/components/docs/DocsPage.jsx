import React, { Component } from 'react';
import Footer from '../_global/ui/Footer.jsx';
import RenderDocsPage from '../_global/ui/RenderDocsPage.jsx';

/* doc page styles */
import '../../styles/docs/DocsPage.scss';


class DocsPage extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            selectedView: 'concepts'
        };

        this.sideBarLinks = [
            {
                title: 'Getting Started',
                sublinks: ['concepts', 'architecture', 'installation']
            }, 
            {
                title: 'Usage',
                sublinks: ['getting client id', 'publishing', 'subscriptions', 'permissions', 'users', 'queues']
            },
            {
                title: 'Examples',
                sublinks: ['E x A', 'E x B', 'E x C']
            }
        ];

        this.onSelectedLink = this.onSelectedLink.bind(this);

    }

    onSelectedLink(e) {

        this.setState({ selectedView : e.target.name})

    }



    get links() {

       return  this.sideBarLinks.map((link, index) => {
            return(
                 <div key={`link-${index}`} className="link-wrappers">
                     <h4>
                         { link.title }
                     </h4>

                     <ul className="sublinks">
                        {(() => {
                            return link.sublinks.map((sublink, index) => {
                                return (
                                    <li
                                        key={`sublink-${index}`}
                                        className={`sublink ${this.state.selectedView == sublink ? 'active' : null}`}
                                    >
                                        <button 
                                            name={sublink}
                                            onClick={this.onSelectedLink}

                                        > 
                                            { sublink }
                                        </button>
                                    </li>
                                );
                            });
                        })()}
                     </ul>
                 </div>
            );
        });
    }

    get examplesPage() {
        
        return(
            <RenderDocsPage title={this.state.selectedView} />
        );
    }

    render() {
        return(
            <div className="container-fluid docs-page">
                <div className="row">
                    <div className="col-md-12 side-bar">
                        <div className="side-bar-links">{this.links}</div>
                        {this.examplesPage}
                        <div className="side-bar-links-tablet">{this.links}</div>
                    </div>
                </div>

                <div className="row">
                    <Footer user={this.props.user} />
                </div>
            </div>
        );
    }
}

export default DocsPage;