import React , { Component } from 'react';
import { PanelGroup, Panel, Heading, Title, Body } from 'react-bootstrap';
import Link from 'gatsby-link';
import Footer from '../_global/ui/Footer.jsx';

import '../../styles/pricing/PricingPage.scss';

class PricingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: '',
            prices: [
                {
                    icon: 'icon-free',
                    plan: 'free',
                    includes: [
                        '100 peak connections per month',
                        '10GB ingress and egress',
                        'free forever'
                    ]
                },
                {
                    icon: 'icon-paid',
                    plan: 'paid',
                    includes: [
                        '$50 per month per 1k (up to 20k) peak connections',
                        '$0.50 per GB ingress',
                        '$0.25 per GB egress'
                    ]
                },
                {
                    icon: 'icon-standalone',
                    plan: 'standalone',
                    includes: [
                        'fully isolated network',
                        'unlimited peak connections',
                        'unlimited ingress and egress',
                        'customizable limits',
                        'dedicated support'
                    ]
                }
            ],
            faqs: [
                {
                    key: '1',
                    heading: 'What are "peak connections"?',
                    questions: [
                        'This is the number of simultaneous connections at any given moment.',
                        'If you have 10,000 devices, but only 1,000 are ever connected at the same time, you will only be charged for 1,000 peak connections.'
                    ]
                },
                {
                    key: '2',
                    heading: 'What is "ingress" and "egress"?',
                    questions: [
                        'Ingress is the amount of bandwidth used to publish messages.',
                        'Egress is the amount of bandwidth used to deliver messages.',
                    ]
                },
                {
                    key: '3',
                    heading: 'Why do you charge for bandwidth?',
                    questions: [
                        'We feel that bandwidth is the most accurate representation of usage costs rather than charging per message (which many of our competitors do).',
                        'Please check out our comparison calculator to learn more.'
                    ]
                },
                {
                    key: '4',
                    heading: 'What happens if I go over my limits?',
                    questions: [
                        'Once you reach your peak connection limit, newer connections will be refused until the number of simultaneous connections decreases.',
                        'You will receive an email alert once per day if your peak connections approaches 75% of your limit during that day.',
                        'We do not currently have a hard limit on bandwidth, but you may opt to receive email alerts once your bandwidth costs cross a defined threshold.'
                    ]
                },
                {
                    key: '5',
                    heading: 'How often can I change my plan?',
                    questions: [
                        'You can upgrade or downgrade your account at any time.',
                        'Once you upgrade from the free plan, you can also set your peak connection limit at any time.',
                        'Once on the paid plan, changing your connection limit has no effect on your current costs, because costs are purely usage-based.',
                        'For example, if you change your connection limit from 10,000 to 15,000, you will still only be charged for your actual usage that month.',
                        'Likewise, downgrading from a higher limit to lower will still charge you for your actual usage for that month.'
                    ]
                }
            ]
        }; 

        this.onHandleSelect = this.onHandleSelect.bind(this);

    }


    onHandleSelect(activeKey) {

        this.setState({ activeKey });
    }

    get plans() {

        return this.state.prices.map((price) => {
            return(
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <p style={{ fontSize: '35px' }}><span className={price.icon}></span></p>
                            <p className="price-plan">{price.plan}</p>
                        </div>
                        <div className="panel-body">
                            <ul>
                                {(() => {
                                    return price.includes.map((include) => {
                                        return (
                                            <li> {include}</li>
                                        );
                                    })
                                })()}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        })
    }

    get accordionPanels() {
        return this.state.faqs.map((faq) => {
            return(
                <div className="col-md-12">
                    <Panel key={faq.key} eventKey={faq.key} style={{ border: 'none' }}>
                        <Panel.Heading>
                            <Panel.Title toggle> <span className="toggle-icon"> {this.state.activeKey === faq.key ? '-' : '+'}</span> {faq.heading}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible style={{ paddingLeft: '30px', borderTop: 'none' }}>
                            {(() => {
                                return faq.questions.map((question) => {
                                    return (
                                        <div>
                                            <p> {question}</p>
                                        </div>
                                    );
                                })
                            })()}
                        </Panel.Body>
                    </Panel>
                </div>
            );
        })
    }

    render() {
        
        return(
            <div className="pricing-page">

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-md-12">

                            <h2 className="tag-line">Our pricing scales too.</h2>

                        </div>

                    </div>

                    <div className="row">

                        <div style={{margin : '0 auto', width: '100px'}}>
                            <div style={{marginBottom : '100px'}} className="underline-accent"></div>
                        </div>

                    </div>

                    <div className="row" style={{backgroundColor : 'white', marginTop : '40px'}}>

                       <div style={{
                            margin : '0 auto', 
                            marginTop : '-50px',
                            marginBottom : '40px',
                            width: '980px'
                           }}>
                            {this.plans}
                       </div>

                        <div style={{ margin: '0 auto', width: '100px' }}>
                            <div style={{ marginBottom : '50px'}} className="underline-accent"></div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="comparing">
                            <p>see our full feature set <span><Link to="/compare">here</Link></span>.</p>
                        </div>

                    </div>

                    <div className="row" style={{ backgroundColor : 'white', minHeight : '480px'}}>

                        <div className="col-md-12">
                            <div className="faq">
                                <p style={{fontSize : '35px'}}><span className="icon-faqs"></span></p>
                                <h4>FAQ</h4>
                            </div>
                        </div>

                        <div className="col-md-12">
                           <PanelGroup
                                accordion
                                id="faq-accordion"
                                activeKey={this.state.activeKey}
                                onSelect={this.onHandleSelect}
                           >

                            <div className="row">
                                    {this.accordionPanels}
                            </div>

                           </PanelGroup>
                        </div>

                    </div>

                    <div className="row">
                        <Footer user={this.props.user} />
                    </div>

                </div>
            </div>
        );
    }
}

export default PricingPage;
