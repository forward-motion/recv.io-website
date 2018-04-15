import React, { Component } from 'react';

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

                     {(() => {
                         return link.sublinks.map((sublink, index) => {
                            return(
                                <div>
                                    <button 
                                        key={`sublink-${index}`} 
                                        name={sublink}
                                        className={`btn btn-sublinks ${this.state.selectedView == sublink ? 'active' : null}`}
                                        onClick={this.onSelectedLink}
                                    >
                                        { sublink }
                                    </button>
                                </div>
                            );
                         });
                     })()}
                 </div>
            );
        });
    }

    render() {
        return(
            <div className="container-fluid docs-page">
                <div className="row">
                    <div className="col-md-3">
                        { this.links }
                    </div>
                    <div className="col-md-9">
                        <h2 style={{ textTransform : 'uppercase', textAlign : 'center' }}> { this.state.selectedView }</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default DocsPage;