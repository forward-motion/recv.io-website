import React , { Component } from 'react';
import Link from 'gatsby-link';

import '../../styles/pricing/PricingPage.scss';

class PricingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prices: [
                {
                    plan: 'free',
                    includes: ['lmiited monitoring', '4 apps', '10k streams', '-']
                },
                {
                    plan: 'paid',
                    includes: ['full monitoring', 'unlimited apps', '100k streans', 'realtime connections']
                },
                {
                    plan: 'standalone network',
                    includes: ['access to Jarves', 'robot build apps for you', 'unlimited streams', 'end-to-end connections']
                }
            ]
        }; 

    }

    get plans() {

        return this.state.prices.map((price) => {
            return(
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            { price.plan }
                        </div>
                        <div className="panel-body">
                            {(() => {
                                return price.includes.map((include) => {
                                    return(
                                        <p> {include }</p>
                                    );
                                })
                            })()}
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {

        return(
            <div className=" container-fluid pricing-page">

                <h1>Pricing Page</h1>

                <div>
                    <h4>Our pricing scales to</h4>

                    { this.plans }

                </div>
                
                <div>
                    <div className="comparing">
                        <p>Ses how we compare to the competition <span><Link to="/compare">Here</Link></span></p>
                    </div>
                </div>

                <div className="fqa">
                    <h4>FAQ</h4>
                </div>
            </div>
        );
    }
}

export default PricingPage;
