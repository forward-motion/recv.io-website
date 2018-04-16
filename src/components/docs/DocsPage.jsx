import React, { Component } from 'react';
import Footer from '../_global/ui/Footer.jsx';

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
                 <div key={`link-${index}`}>
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

    render() {
        return(
            <div className="container-fluid docs-page">
                <div className="row">
                    <div className="col-md-3 side-bar">
                        { this.links }
                    </div>
                    <div className="col-md-9" style={{ backgroundColor : 'white' }}>
                        <h2 style={{ textTransform : 'uppercase' }}> { this.state.selectedView }</h2>
                    </div>
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default DocsPage;