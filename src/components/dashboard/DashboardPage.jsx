import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import VirtualizedSelect from 'react-virtualized-select';

import Overview from './my-apps-subviews/Overview.jsx';
import Keys from './my-apps-subviews/Keys.jsx';
import Data from './my-apps-subviews/Data.jsx';
import Plan from './my-apps-subviews/Plan.jsx';
import Login from './Login.jsx';
import App from './App.jsx';
import MyAccount from './MyAccount.jsx';
import ModalApp from './Modal.jsx';

// app styles 
import '../../styles/dashboard/DashboardPage.scss';

import user from '../../data/apps.js';


class DashboardPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            view: {label: 'my-apps', value: 'my-apps'},
            subView: 'overview',
            selectedApp: null,
            deleteApp: null,
            show: false,
            modalType: null,
            userApps: user,
            createdApp: ''

        };

        this.onChangeView = this.onChangeView.bind(this);
        this.onChangeSelectedApp = this.onChangeSelectedApp.bind(this);
        this.onChangeSubView = this.onChangeSubView.bind(this);
        this.onShowModal = this.onShowModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onDeleteApp = this.onDeleteApp.bind(this);
        this.onCreateApp = this.onCreateApp.bind(this);
        this.handleUserEnter = this.handleUserEnter.bind(this);
    }

    onChangeView(selectedOption) {

        this.setState({ view: selectedOption, selectedApp : null});
        
    }

    handleUserEnter(e) {

        this.setState({ createdApp : e.target.value })
    }

    onShowModal(type, app) {
        
        //let type = e.currentTarget.name;
        

        this.setState({ show : !this.state.show, modalType: type , deleteApp: app});
    }

    handleClose() {

        this.setState({show : false})
    }

    onDeleteApp(delete_app) {

        let selectedAppToDelete = this.state.userApps.filter((app) => {
            return app.name !== delete_app; 
        }); 

        this.setState({userApps : selectedAppToDelete, show: false})
        
        
    }

    onCreateApp() {
        console.log('it was created');
        
        let usersApps = this.state.userApps; 
        usersApps.push({
            name: this.state.createdApp,
            stats: [{type: '', key: ''},{type: '', key: ''},{type: '', key: ''}]
        });

        this.setState({ userApps: usersApps, show: false });
    }

    onChangeSelectedApp(selectedApp) {

        this.setState({ selectedApp: selectedApp });
    }

    onChangeSubView(subView) {

        this.setState({ subView });
    }

    get showModal() {

        switch(this.state.modalType) {
            case 'delete app':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        functionalApp={this.onDeleteApp}
                        show={this.state.show} 
                        appName={this.state.deleteApp.name}
                        buttonType="Delete">
                        <p>Want to delete {this.state.deleteApp.name}</p>
                    </ModalApp>
                );
            case 'create app':
                return(
                    <ModalApp 
                        name={this.state.modalType} 
                        handleClose={this.handleClose} 
                        functionalApp={this.handleClose}
                        show={this.state.show}
                        buttonType="Cancel">
                        <p>Create App</p>
                        <form>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <ControlLabel>Name</ControlLabel>
                            <div className="row">
                                <div className="col-md-6">
                                <FormControl
                                    type="text"
                                    value={this.state.createdApp}
                                    placeholder="Enter text"
                                    onChange={this.handleUserEnter}
                                />
                                </div>
                                <div className="col-md-3">
                                    <Button onClick={this.onCreateApp}>Create App</Button>
                                </div>
                            </div>
                            
                        </FormGroup>
                        </form>
                    </ModalApp>
                );
        }
        
    }

    get breadcrumbs() {

        // render a dropdown that can toggle the view, then the selected app (if any), then the subview.

        console.log('App selected', this.state.selectedApp);
        

        return (

            <ol className="breadcrumb">
                <li>
                    <VirtualizedSelect
                        value={this.state.view}
                        options={this.props.views}
                        clearable={false}
                        onChange={this.onChangeView}
                    />
                </li>
                {(() => {
                    
                    return this.state.selectedApp !== null ? 
                        (
                            <li> 
                                { this.state.selectedApp.name } 
                                <button
                                    className="btn btn-breadcrumb-removal" 
                                    onClick={() => this.setState({ selectedApp : null })}> 
                                        x 
                                </button> 
                            </li>
                        ) : null
                })()}
            </ol>
        );
    }

    get userApps() {

        console.log('user', user);
        

        return this.state.userApps.map((app, index) => {
            return(
                <div className="col-md-3">
                    <App
                        key={index}
                        appInfo={app}
                        onChangeSelectedApp={this.onChangeSelectedApp}>
                            <button
                                className="btn trash-btn"
                                name="delete app"
                                onClick={() => this.onShowModal('delete app', app)}
                            >
                                <i 
                                    className="fa fa-trash">
                                </i>
                            </button>
                    </App>
                </div>
            );
        });
    }

    get subview() {

        switch (this.state.subView) {
            case 'overview':
                return (
                    <Overview selectedApp={this.state.selectedApp} />
                );
            case 'keys':
                return (
                    <Keys selectedApp={this.state.selectedApp} />
                );
            case 'data':
                return (
                    <Data selectedApp={this.state.selectedApp} />
                );
            case 'plan':
                return (
                    <Plan selectedApp={this.state.selectedApp} />
                );
        }
    }

    get subViewBtn() {
        const subViewButtons = ['overview', 'keys', 'data', 'plan'];

        return subViewButtons.map((btn) => {
            return(
                <div className="subview-buttons">
                    <button
                        name={btn}
                        className={`btn ${this.state.subView == btn ? 'active' : null}`}
                        onClick={() => this.setState({ subView : btn })}
                    >   
                        { btn }
                        <div className={`underline ${this.state.subView == btn ? 'active' : null}`}></div>
                    </button>
                </div>
            );
        })

    }

    get selectedApp() {

        return(
            <div>
                
                <div className="row">
                    <div className="subview-button-layout">
                        { this.subViewBtn }
                    </div>
                </div>

                <div className="row">
                    { this.subview }
                </div>
            </div>
        );
    }

    get content() {

        switch(this.state.view.label) {
            case 'my-apps':
                return (
                    <div className="my-apps">
                        <div className="row">
                        <div className="col-md-3 pull-right">
                            <div style={{marginBottom: '50px', textAlign: 'right'}}>
                                <button 
                                    className="btn btn-default"
                                    onClick={() => this.onShowModal('create app', null)}
                                >
                                    Create App
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            { !this.state.selectedApp ? this.userApps : this.selectedApp }
                        </div>
                    </div>
                );
            case 'my-account':
                return (<MyAccount />);
        }
    }

    render() {


        const { user, firebase } = this.props;


        if (!user) {
            return <Login firebase={firebase} />;
        }

        return (
            <div className="dashboard-page">
               <div style={{maxWidth: '1024px', margin: '0 auto'}}>
                <div className="row">
                    <a className="pull-right" style={{marginRight: '20px'}} onClick={() => firebase.auth().signOut()}>Sign-out</a>
                </div>
                <div className="container-fluid">
                    {this.breadcrumbs}
                    {this.content}
                    { this.showModal }
                </div>
               </div>
            </div>
        );
    }

    static get defaultProps() {

        return {
            views: [
                {
                    label: 'my-apps',
                    value: 'my-apps'
                },
                {
                    label: 'my-account',
                    value: 'my-account'
                }
            ]
        };
    }
}

export default DashboardPage;