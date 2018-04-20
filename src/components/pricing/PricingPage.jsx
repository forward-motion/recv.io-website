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
                    includes: ['lmiited monitoring', '4 apps', '10k streams', '-']
                },
                {
                    icon: 'icon-paid',
                    plan: 'paid',
                    includes: ['full monitoring', 'unlimited apps', '100k streans', 'realtime connections']
                },
                {
                    icon: 'icon-standalone',
                    plan: 'standalone',
                    includes: ['access to Jarves', 'robot build apps for you', 'unlimited streams', 'end-to-end connections']
                }
            ],
            faqs: [
                {
                    key: '1',
                    heading: 'Lorem ipsum dolor sit amet, his odio omnium ad, mea minimum consequat democritum an. Ut cum feugiat vocibus forensibus, eros suscipiantur ?',
                    questions: [
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.'                        
                    ]
                },
                {
                    key: '2',
                    heading: 'Lorem ipsum dolor sit amet, his odio omnium ad, mea minimum consequat democritum an. Ut cum feugiat vocibus forensibus, eros suscipiantur ?',
                    questions: [
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.'
                    ]
                },
                {
                    key: '3',
                    heading: 'Lorem ipsum dolor sit amet, his odio omnium ad, mea minimum consequat democritum an. Ut cum feugiat vocibus forensibus, eros suscipiantur ?',
                    questions: [
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.'
                    ]
                },
                {
                    key: '4',
                    heading: 'Lorem ipsum dolor sit amet, his odio omnium ad, mea minimum consequat democritum an. Ut cum feugiat vocibus forensibus, eros suscipiantur ?',
                    questions: [
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.',
                        'bus elaboraret cu, illud fugit conceptam vis in, eam mundi tation bonorum cu. Illum incorrupte contentiones eu pri.'
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
                <div className="panel panel-default" style={{width : '300px'}}>
                    <div className="panel-heading">
                        <p style={{ fontSize : '35px'}}><span className={ price.icon }></span></p>
                        <p className="price-plan">{ price.plan }</p>
                    </div>
                    <div className="panel-body">
                        <ul>
                            {(() => {
                                return price.includes.map((include) => {
                                    return (
                                        <li> { include }</li>
                                    );
                                })
                            })()}
                        </ul>
                    </div>
                </div>
            );
        })
    }

    get accordionPanels() {
        return this.state.faqs.map((faq) => {
            return(
                <Panel key={faq.key} eventKey={faq.key} style={{ border : 'none'}}>
                    <Panel.Heading>
                        <Panel.Title toggle> <span className="toggle-icon"> { this.state.activeKey === faq.key ? '-' : '+' }</span> { faq.heading }</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible style={{paddingLeft : '30px', borderTop : 'none'}}>
                        {(() => {
                            return faq.questions.map((question) => {
                                return(
                                    <div>
                                        <p> { question }</p>
                                    </div>
                                );
                            })
                        })()}
                    </Panel.Body>
                </Panel>
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
                            <p>see how we compare to the competition <span><Link to="/compare">here</Link></span>.</p>
                        </div>

                    </div>

                    <div className="row" style={{ backgroundColor : 'white'}}>

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

                            { this.accordionPanels }

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
