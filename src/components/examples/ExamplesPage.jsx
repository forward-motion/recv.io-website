import React, { Component } from 'react'; 
import Footer from '../_global/ui/Footer.jsx';
import SecondaryHeader from '../_global/ui/SecondaryHeader';

import '../../styles/examples/ExamplesPage.scss';

class ExamplesPage extends Component {
    constructor(props) {
        super(props); 

        this.basic_examples = [
            {
                app: 'Chat App',
                icon: 'icon-chat',
                tag: 'simple chat example'
            },
            {
                app: 'MapApp',
                icon: 'icon-map',
                tag: 'real-time position tracking'
            },
            {
                app: 'Website',
                icon: 'icon-website',
                tag: 'with notifications'
            }
        ]; 

        this.advance_examples = [
            {
                app: 'WhatSlack',
                icon: 'icon-whatslack',
                tag: 'a fully featured chat client'
            },
            {
                app: '{x}uber',
                icon: 'icon-x-uber',
                tag: 'uber for “x”'
            },
            {
                app: 'GitFeed',
                icon: 'icon-gitfeed',
                tag: 'turn GitHub into a social network'
            }
        ];
    }

    get basicExamples() {
        return this.basic_examples.map((example) => {
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="app-wrapper">
                                <div className="col-md-2">
                                    <p className="icons"><span className={ example.icon }></span></p>
                                </div>
                                <div className="col-md-10">
                                    <p className="app-name"> {example.app} </p>
                                    <p className="app-tag"> {example.tag} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    get advanceExamples() {
        return this.advance_examples.map((example) => {
            return(
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="app-wrapper">
                                <div className="col-md-2">
                                    <p className="icons"><span className={example.icon}></span></p>
                                </div>
                                <div className="col-md-10">
                                    <p className="app-name"> {example.app} </p>
                                    <p className="app-tag"> {example.tag} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }



    render() {

        return(
            <div className="examples-page">
                <div className="row">
                    <SecondaryHeader title='Examples' />
                </div>

                <div className="row" style={{backgroundColor : 'white'}}>
                    <div style={{ width: '860px', margin: '0 auto', marginTop: '40px', height: '63vh'}}>
                        <div className="row">
                            <div className="col-md-6">
                                <div style={{ width: '100px', margin: '0 auto'}}>
                                    <h3>basic</h3>
                                    <div className="accent-underline"></div>
                                </div>
                               { this.basicExamples }
                            </div>
                            <div className="col-md-6">
                                <div style={{ width: '100px', margin: '0 auto' }}>
                                    <h3>advance</h3>
                                    <div className="accent-underline"></div>
                                </div>
                                { this.advanceExamples }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default ExamplesPage; 